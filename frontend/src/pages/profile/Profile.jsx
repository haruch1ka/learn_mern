import Topbar from "./../components/topbar/Topbar";
import Sidebar from "./../components/sidebar/Sidebar";
import Timeline from "./../components/timeline/Timeline";
import Rightbar from "./../components/rightbar/Rightbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { useContext } from "react";
import { AuthContext } from "./../../state/AuthContext";

const Profile = () => {
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;
	const { user: currentuser } = useContext(AuthContext);

	const [user, setUser] = useState({});
	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(`/api/users?username=${username}`);
				setUser(response.data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		fetchUser();
	}, [username]);

	return (
		<>
			<Topbar />
			<div className="profileContainer">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img src={user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className="profileCoverImg" />
							<img
								src={
									currentuser.profilePicture != ""
										? PUBLIC_FOLDER + currentuser.profilePicture
										: PUBLIC_FOLDER + "/person/noAvatar.png"
								}
								alt=""
								className="profileUserImg"
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Timeline username={username} />
						<Rightbar user={user} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;

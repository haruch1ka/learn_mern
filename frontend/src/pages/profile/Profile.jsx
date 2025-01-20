import Topbar from "./../components/topbar/Topbar";
import Sidebar from "./../components/sidebar/Sidebar";
import Timeline from "./../components/timeline/Timeline";
import Rightbar from "./../components/rightbar/Rightbar";
import "./profile.css";
import axios from "axios";

import { useEffect, useState } from "react";

const Profile = () => {
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;

	const [user, setUser] = useState({});
	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(`/api/users?username=anno`);
				setUser(response.data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		fetchUser();
	}, []);

	return (
		<>
			<Topbar />
			<div className="profileContainer">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img src={PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className="profileCoverImg" />
							<img src={PUBLIC_FOLDER + "/person/1.jpeg"} alt="" className="profileUserImg" />
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Timeline username="anno" />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;

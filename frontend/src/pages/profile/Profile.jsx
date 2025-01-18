import Topbar from "./../components/topbar/Topbar";
import Sidebar from "./../components/sidebar/Sidebar";
import Timeline from "./../components/timeline/Timeline";
import Rightbar from "./../components/rightbar/Rightbar";
import "./profile.css";

const Profile = () => {
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;
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
							<h4 className="profileInfoName">Shin Code</h4>
							<span className="profileInfoDesc">Udemy講師をしています</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Timeline />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;

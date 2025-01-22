import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../../../state/AuthContext";

const Topbar = () => {
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;

	const { user } = useContext(AuthContext);
	return (
		<>
			<div className="topbarContainer">
				<div className="topbarLeft">
					<Link to="/" style={{ textDecoration: "none" }}>
						<span className="logo">Real SNS</span>
					</Link>
				</div>

				<div className="topbarCenter">
					<div className="searchbar">
						<SearchIcon className="searchIcon" />
						<input type="text" className="searchInput" placeholder="探し物は何ですか?" />
					</div>
				</div>

				<div className="topbarRight">
					<div className="topbarItemIcons">
						<div className="topbarIconItem">
							<ChatIcon />
							<div className="topbarIconBadge">1</div>
						</div>
						<div className="topbarIconItem">
							<NotificationsIcon />
							<div className="topbarIconBadge">2</div>
						</div>
						<Link to={`/profile/${user.username}`}>
							<img
								src={user.profilePicture ? user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"}
								alt=""
								className="topbarImg"
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Topbar;

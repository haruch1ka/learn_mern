import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.css";

const Topbar = () => {
	return (
		<>
			<div className="topbarContainer">
				<div className="topbarLeft">
					<span className="logo">Real SNS</span>
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
						<img src="./assets/person/1.jpeg" alt="" className="topbarImg" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Topbar;

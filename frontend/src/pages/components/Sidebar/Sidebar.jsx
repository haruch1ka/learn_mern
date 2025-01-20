import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import ProfileIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Sidebar.css";

import { Link } from "react-router-dom";

import { Users } from "./../../../dummyData";

const Sidebar = () => {
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;
	return (
		<>
			<div className="sidebar">
				<div className="sidebarWrapper">
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<HomeIcon className="sidebarIcon" />
							<Link to="/" style={{ textDecoration: "none", color: "black" }}>
								<span className="sidebarListItemText">ホーム</span>
							</Link>
						</li>
						<li className="sidebarListItem">
							<SearchIcon className="sidebarIcon" />
							<span className="sidebarListItemText">検索</span>
						</li>

						<li className="sidebarListItem">
							<NotificationsIcon className="sidebarIcon" />
							<span className="sidebarListItemText">通知</span>
						</li>
						<li className="sidebarListItem">
							<MessageIcon className="sidebarIcon" />
							<span className="sidebarListItemText">メッセージ</span>
						</li>
						<li className="sidebarListItem">
							<BookMarkIcon className="sidebarIcon" />
							<span className="sidebarListItemText">ブックマーク</span>
						</li>
						<li className="sidebarListItem">
							<ProfileIcon className="sidebarIcon" />
							<Link to="/profile/anno" style={{ textDecoration: "none", color: "black" }}>
								<span className="sidebarListItemText">プロフィール</span>
							</Link>
						</li>
						<li className="sidebarListItem">
							<SettingsIcon className="sidebarIcon" />
							<span className="sidebarListItemText">設定</span>
						</li>
					</ul>
					<hr className="sidebarHr" />
					<ul className="sidebarFriendList">
						{Users.map((u) => (
							<li className="sidebarFriend" key={u.id}>
								<img src={PUBLIC_FOLDER + u.profilePicture} alt="" className="sidebarFriendImg" />
								{u.username}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Sidebar;

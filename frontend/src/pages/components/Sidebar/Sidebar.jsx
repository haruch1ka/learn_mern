import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import ProfileIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Sidebar.css";

import { Users } from "./../../../dummyData";

const Sidebar = () => {
	return (
		<>
			<div className="sidebar">
				<div className="sidebarWrapper">
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<HomeIcon className="sidebarIcon" />
							<span className="sidebarListItemText">ホーム</span>
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
							<span className="sidebarListItemText">プロフィール</span>
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
								<img src={u.profilePicture} alt="" className="sidebarFriendImg" />
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

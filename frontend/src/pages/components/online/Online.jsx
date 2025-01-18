import "./Online.css";
const Online = ({ user }) => {
	const { profilePicture, username } = user;
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;
	return (
		<div className="online">
			<div className="onlineContainer">
				<li className="rightbarFriend">
					<div className="rightbarProfileImgContainer">
						<img src={PUBLIC_FOLDER + profilePicture} alt="" className="rightbarProfileImg" />
						<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">{username}</span>
				</li>
			</div>
		</div>
	);
};
export default Online;

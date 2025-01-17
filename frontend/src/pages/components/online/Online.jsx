import "./Online.css";
const Online = ({ user }) => {
	const { profilePicture, username } = user;
	return (
		<div className="online">
			<div className="onlineContainer">
				<li className="rightbarFriend">
					<div className="rightbarProfileImgContainer">
						<img src={profilePicture} alt="" className="rightbarProfileImg" />
						<span className="rightbarOnline"></span>
					</div>
					<span className="rightbarUsername">{username}</span>
				</li>
			</div>
		</div>
	);
};
export default Online;

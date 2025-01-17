import "./Rightbar.css";
import Online from "./../online/Online";
import { Users } from "./../../../dummyData";

const Rightbar = ({ profile }) => {
	const HomeRightbar = () => {
		return (
			<>
				<div className="eventContainer">
					<img src="./assets/star.png" alt="" className="starImg" />
					<span className="eventText">
						<b>フォロワー限定</b>イベント開催中！
					</span>
				</div>
				<img src="./assets/ad.jpeg" alt="" className="eventImg" />
				<h4 className="rightbarTitle"></h4>
				<ul className="rightbarFriendList">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>

				<p className="promotionTitle">プロモーション広告</p>
				<img src="./assets/promotion/promotion1.jpeg" alt="" className="rightbarPromotionImg" />
				<p className="promotionName">ショッピング</p>

				<img src="./assets/promotion/promotion2.jpeg" alt="" className="rightbarPromotionImg" />
				<p className="promotionName">カーショップ</p>

				<img src="./assets/promotion/promotion3.jpeg" alt="" className="rightbarPromotionImg" />
				<p className="promotionName">Shincode株式会社</p>
			</>
		);
	};
	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">ユーザー情報</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfokey">出身:</span>
						<span className="rightbarInfokey">福岡</span>
					</div>
				</div>
				<h4 className="rightbarTitle">あなたの友達</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img src="./assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Shin Code</span>
					</div>
					<div className="rightbarFollowing">
						<img src="./assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">Shin Code</span>
					</div>

					<div className="rightbarFollowing">
						<img src="./assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">hayase</span>
					</div>

					<div className="rightbarFollowing">
						<img src="./assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">usio</span>
					</div>

					<div className="rightbarFollowing">
						<img src="./assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
						<span className="rightbarFollowingName">tsukatsuki</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<>
			<div className="rightbar">
				<div className="rightbarWrapper">{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
			</div>
		</>
	);
};

export default Rightbar;

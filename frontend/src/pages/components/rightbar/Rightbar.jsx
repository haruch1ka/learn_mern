import "./Rightbar.css";
import Online from "./../online/Online";
import { Users } from "./../../../dummyData";

const Rightbar = () => {
	return (
		<>
			<div className="rightbar">
				<div className="rightbarWrapper">
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
				</div>
			</div>
		</>
	);
};

export default Rightbar;

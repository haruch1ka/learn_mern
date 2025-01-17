import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "./../../../dummyData";
import { useState } from "react";

const Post = ({ post }) => {
	//cオブジェクトのなかに desc, photo, date, like, comment, userId を定義する
	const c = { post: post.desc, photo: post.photo, date: post.date, like: post.like, comment: post.comment, userId: post.userId };

	const user = Users.filter((u) => u.id === c.userId);
	console.log(user);

	const [like, setLike] = useState(c.like);
	const [isLiked, setIsLiked] = useState(false);
	const handleLike = (like) => {
		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	return (
		<>
			<div className="post">
				<div className="postWrapper">
					<div className="postTop">
						<div className="postTopLeft">
							<img src={user[0].profilePicture} alt="" className="postProfileImg" />
							<span className="postUsername">{user[0].username}</span>
							<span className="postDate">{c.date}</span>
						</div>
						<div className="postTopRight">
							<MoreVertIcon />
						</div>
					</div>
					<div className="postCenter">
						<span className="postText">{c.desc}</span>
						<img src={c.photo} alt="" className="postImg" />
					</div>
					<div className="postBottom">
						<div className="postBottomLeft">
							<img src="./assets/heart.png" alt="" className="likeIcon" onClick={() => handleLike(like)} />
							<span className="postLikeCounter">{like}人がいいねを押しました</span>
						</div>
						<div className="postBottomRight">
							<span className="postCommentText">{c.comment}:コメント</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;

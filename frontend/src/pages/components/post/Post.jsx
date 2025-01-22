import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Users } from "./../../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

import { useContext } from "react";
import { AuthContext } from "./../../../state/AuthContext";

import DropdownMenu from "./../post/PostMenu";

const Post = ({ post }) => {
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;

	const [like, setLike] = useState(post.likes.length);
	const [isLiked, setIsLiked] = useState(false);
	const { user: currentuser } = useContext(AuthContext);

	const handleLike = async (like) => {
		try {
			await axios.put(`/api/posts/${post._id}/like`, { userId: currentuser._id });
		} catch (error) {
			console.log("Error liking post:", error);
		}

		setLike(isLiked ? like - 1 : like + 1);
		setIsLiked(!isLiked);
	};

	const [user, setUser] = useState([]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await axios.get(`/api/users/?userId=${post.userId}`);
				setUser(response.data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		fetchUser();
	}, [post.userId]);

	return (
		<>
			<div className="post">
				<div className="postWrapper">
					<div className="postTop">
						<div className="postTopLeft">
							<Link to={`/profile/${user.username}`}>
								<img
									src={user.profilePicture != "" ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"}
									alt=""
									className="postProfileImg"
								/>
							</Link>
							<span className="postUsername">{user.username}</span>
							<span className="postDate">{format(post.createdAt)}</span>
						</div>
						<div className="postTopRight">
							<DropdownMenu post={post}>
								<MoreVertIcon />
							</DropdownMenu>
						</div>
					</div>
					<div className="postCenter">
						<span className="postText">{post.desc}</span>
						<img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
					</div>
					<div className="postBottom">
						<div className="postBottomLeft">
							<img src={PUBLIC_FOLDER + "/heart.png"} alt="" className="likeIcon" onClick={() => handleLike(like)} />
							<span className="postLikeCounter">{like}人がいいねを押しました</span>
						</div>
						<div className="postBottomRight">
							<span className="postCommentText">{post.comment}:コメント</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Post;

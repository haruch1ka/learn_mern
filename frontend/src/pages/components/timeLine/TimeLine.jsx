import "./TimeLine.css";
import Share from "./../share/Share";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./../post/Post";
import axios from "axios";

import { useContext } from "react";
import { AuthContext } from "./../../../state/AuthContext";

const Timeline = ({ username }) => {
	const [Posts, setPosts] = useState([]);
	const { user } = useContext(AuthContext);
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = username
					? await axios.get(`/api/posts/profile/${username}`) // profileの場合
					: await axios.get(`/api/posts/timeline/${user._id}`); // ホームの場合
				console.log(response.data);
				setPosts(response.data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		fetchPosts();
	}, [username, user._id]);

	return (
		<>
			<div className="timeline">
				<div className="timelineWrapper">
					<Share />
					{Posts.map((p) => (
						<Post key={p._id} post={p} />
					))}
				</div>
			</div>
		</>
	);
};

export default Timeline;

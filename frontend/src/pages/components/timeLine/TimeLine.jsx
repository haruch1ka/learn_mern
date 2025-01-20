import "./TimeLine.css";
import Share from "./../share/Share";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./../post/Post";
import axios from "axios";

const Timeline = ({ username }) => {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = username
					? await axios.get(`/api/posts/profile/${username}`)
					: await axios.get("/api/posts/timeline/678daa7b178a0daf01723059");
				console.log(response.data);
				setPosts(response.data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		fetchPosts();
	}, [username]);

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

import "./TimeLine.css";
import Share from "./../share/Share";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./../post/Post";
import axios from "axios";
// import { Posts } from "./../../../dummyData";

const Timeline = () => {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/posts/timeline/6787b90e754cff1397b1707e");
				console.log(response.data);
				setPosts(response.data);
			} catch (error) {
				console.error("Error fetching posts:", error);
			}
		};
		fetchPosts();
	}, []);

	return (
		<>
			<div className="timeline">
				<div className="timelineWrapper">
					<Share />
					{/* {Posts.map((p) => (
						<Post key={p.id} post={p} />
					))} */}
				</div>
			</div>
		</>
	);
};

export default Timeline;

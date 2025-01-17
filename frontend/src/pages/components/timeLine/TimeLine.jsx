import "./TimeLine.css";
import Share from "./../share/Share";
import Post from "./../post/Post";
import { Posts } from "./../../../dummyData";

const Timeline = () => {
	return (
		<>
			<div className="timeline">
				<div className="timelineWrapper">
					<Share />
					{Posts.map((p) => (
						<Post key={p.id} post={p} />
					))}
				</div>
			</div>
		</>
	);
};

export default Timeline;

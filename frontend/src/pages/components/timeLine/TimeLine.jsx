import "./TimeLine.css";
import Share from "./../share/Share";
import Post from "./../post/Post";

const Timeline = () => {
	return (
		<>
			<div className="timeline">
				<div className="timelineWrapper">
					<Share />
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</>
	);
};

export default Timeline;

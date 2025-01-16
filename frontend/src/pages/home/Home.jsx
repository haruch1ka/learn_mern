import Topbar from "./../components/topbar/Topbar";
import Sidebar from "./../components/sidebar/Sidebar";
import Timeline from "./../components/timeline/Timeline";
import Rightbar from "./../components/rightbar/Rightbar";
import "./home.css";
const Home = () => {
	return (
		<>
			<Topbar />

			<div className="homeContainer">
				<Sidebar />
				<Timeline />
				<Rightbar />
			</div>
		</>
	);
};

export default Home;

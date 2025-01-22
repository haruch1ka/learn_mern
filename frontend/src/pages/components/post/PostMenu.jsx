import { useState, useContext } from "react";
import "./PostMenu.css";
import axios from "axios";
import { AuthContext } from "./../../../state/AuthContext";

const PostmMenu = ({ children, post }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { user: currentuser } = useContext(AuthContext);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleDelete = async () => {
		if (post.userId !== currentuser._id) {
			console.log("自分の投稿だけ削除できるぜ");
			return;
		} else {
			try {
				await axios.delete(`/api/posts/${post._id}`, { data: { userId: currentuser._id } });
				window.location.reload();
			} catch (error) {
				console.log("Error deleting post:", error);
			}
		}
	};

	return (
		<div style={{ position: "relative" }}>
			<button onClick={toggleMenu} className="dropdownButton">
				{children}
			</button>
			{isOpen && (
				<div className="modalOverlay">
					<div className="modalContent">
						<button onClick={handleDelete}>
							<span className="delButton">投稿を削除</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default PostmMenu;

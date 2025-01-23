import "./Share.css";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import { useContext, useRef, useState } from "react";
import { AuthContext } from "./../../../state/AuthContext";

import axios from "axios";

const Share = () => {
	const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;
	const { user } = useContext(AuthContext);
	const desc = useRef();

	const [file, setFile] = useState(null);

	const onSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value,
			img: "",
			likes: [],
		};
		if (file) {
			const data = new FormData();
			const fileName = file.name + Date.now();
			data.append("imagename", fileName);
			data.append("file", file);
			newPost.img = fileName;
			try {
				await axios.post("/api/upload", data);
			} catch (error) {
				console.log("Error uploading image:", error);
			}
		} else {
			console.log("No file selected");
		}

		try {
			await axios.post("/api/posts", newPost);
			window.location.reload();
		} catch (error) {
			console.log("Error creating post:", error);
		}
	};

	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						src={user.profilePicture != "" ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + "/person/noAvatar.png"}
						alt=""
						className="shareProfileImg"
					/>
					<input type="text" className="shareInput" placeholder=" 今何してるの" ref={desc} />
				</div>
				<hr className="shareHr" />
				<form className="shareButtons" onSubmit={(e) => onSubmit(e)}>
					<div className="shareOptions">
						<label className="shareOption" htmlFor="file">
							<ImageIcon className="shareIcon" htmlColor="blue" />
							<span className="shareOptionText">写真</span>
							<input
								type="file"
								id="file"
								accept=".png, .jpeg, .jpg"
								style={{ display: "none" }}
								onChange={(e) => {
									setFile(e.target.files[0]);
								}}
							/>
						</label>
						<div className="shareOption">
							<GifIcon className="shareIcon" htmlColor="hotpink" />
							<span className="shareOptionText">GIF</span>
						</div>
						<div className="shareOption">
							<FaceIcon className="shareIcon" htmlColor="green" />
							<span className="shareOptionText">気持ち</span>
						</div>
						<div className="shareOption">
							<AnalyticsIcon className="shareIcon" htmlColor="red" />
							<span className="shareOptionText">投票</span>
						</div>
					</div>
					<button className="shareButton" type="submit">
						投稿
					</button>
				</form>
			</div>
		</div>
	);
};

export default Share;

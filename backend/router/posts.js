const router = require("express").Router();
const Post = require("./../models/Post");
const User = require("./../models/User");

// CRUD
//投稿の作成
router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		return res.status(200).json(savedPost);
	} catch (error) {
		return res.status(500).json(error);
	}
});

//投稿の更新
router.put("/:id", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.updateOne({ $set: req.body });
			const savedPost = await post.save();
			return res.status(200).json(savedPost);
		} else {
			return res.status(403).json("自分の投稿だけ更新できる");
		}
	} catch (error) {
		return res.status(500).json(error);
	}
});

//投稿の削除
router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.userId === req.body.userId) {
			await post.deleteOne();
			return res.status(200).json("削除できた");
		} else {
			return res.status(403).json("自分の投稿だけ削除できる");
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json(error);
	}
});

//投稿の取得
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		return res.status(200).json(post);
	} catch (error) {
		return res.status(500).json(error);
	}
});
//投稿のいいね
router.put("/:id/like", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post.likes.includes(req.body.userId)) {
			await post.updateOne({ $push: { likes: req.body.userId } });
			return res.status(200).json("いいねした");
		} else {
			await post.updateOne({ $pull: { likes: req.body.userId } });
			return res.status(200).json("いいね解除");
		}
	} catch (error) {
		return res.status(500).json(error);
	}
});

// タイムラインの投稿を取得
router.get("/timeline/:userId", async (req, res) => {
	try {
		const currentUser = await User.findById(req.params.userId);
		const userPosts = await Post.find({ userId: currentUser._id });
		//自分がフォローしている友達の投稿内容を全て取得する。
		const friendPosts = await Promise.all(
			currentUser.followings.map((friendId) => {
				return Post.find({ userId: friendId });
			})
		);
		return res.status(200).json(userPosts.concat(...friendPosts));
	} catch (error) {
		return res.status(500).json(error);
	}
});

//プロフィール専用の投稿を取得
router.get("/profile/:username", async (req, res) => {
	try {
		const user = await User.findOne({ username: req.params.username });
		const posts = await Post.find({ userId: user._id });
		return res.status(200).json(posts);
	} catch (error) {
		console.error("Error fetching posts:", error);
		return res.status(500).json(error);
	}
});

module.exports = router;

const router = require("express").Router();
const Post = require("./../models/Post");

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

module.exports = router;

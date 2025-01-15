const router = require("express").Router();
const User = require("./../models/User");

// CRUD
//ユーザ情報の更新

router.put("/:id", async (req, res) => {
	if (req.body.userId == req.params.id || req.body.isAdmin) {
		try {
			const user = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			});
			return res.status(200).json("更新できた");
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(403).json("自分の情報だけ更新できる");
	}
});

//ユーザ情報の削除

router.delete("/:id", async (req, res) => {
	if (req.body.userId == req.params.id || req.body.isAdmin) {
		try {
			const user = await User.findByIdAndDelete(req.params.id);
			return res.status(200).json("削除できた");
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(403).json("自分の情報だけ削除できる");
	}
});
//ユーザ情報の取得

router.get("/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		const { password, updatedAt, ...other } = user._doc;
		return res.status(200).json(other);
	} catch (error) {
		return res.status(500).json(error);
	}
});

//ユーザのフォロー

router.put("/:id/follow", async (req, res) => {
	if (req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			if (!user.followers.includes(req.body.userId)) {
				await user.updateOne({ $push: { followers: req.body.userId } });
				await currentUser.updateOne({ $push: { followings: req.params.id } });
				return res.status(200).json("フォローできた");
			} else {
				return res.status(403).json("フォロー済み");
			}
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(500).json("自分をフォローできない");
	}
});

//ユーザのフォロー外す

router.put("/:id/unfollow", async (req, res) => {
	if (req.body.userId !== req.params.id) {
		try {
			const user = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			//フォローしているかどうか
			if (user.followers.includes(req.body.userId)) {
				await user.updateOne({ $pull: { followers: req.body.userId } });
				await currentUser.updateOne({ $pull: { followings: req.params.id } });
				return res.status(200).json("フォロー解除できた");
			} else {
				return res.status(403).json("フォローしていない");
			}
		} catch (error) {
			return res.status(500).json(error);
		}
	} else {
		return res.status(500).json("自分をフォローできない");
	}
});

module.exports = router;

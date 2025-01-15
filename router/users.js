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

module.exports = router;

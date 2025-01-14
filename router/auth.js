const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
	try {
		const newUser = await new User({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		return res.status(500).join(error);
	}
});

module.exports = router;

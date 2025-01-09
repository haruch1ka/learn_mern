const router = require("express").Router();

router.get("/", (req, res) => {
	res.send("users express");
});

module.exports = router;

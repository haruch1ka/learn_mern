const router = require("express").Router();
const multer = require("multer");

//multerの設定

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/images");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res) => {
	try {
		return res.status(200).json("File uploaded successfully");
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;

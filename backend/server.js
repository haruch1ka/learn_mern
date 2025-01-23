const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const path = require("path");

const mongoose = require("mongoose");
require("dotenv").config();
//connect to mongodb
mongoose
	.connect(`${process.env.MONGO_URL}`)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

//endpoint
const userRoute = require("./router/users");
const authsRoute = require("./router/auth");
const postsRoute = require("./router/posts");
const uploadRoute = require("./router/upload");

//middleware
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authsRoute);
app.use("/api/posts", postsRoute);
app.use("/api/upload", uploadRoute);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

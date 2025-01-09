const express = require("express");
const app = express();
const PORT = 3000;

//endpoint
const userRoute = require("./router/users");
const authsRoute = require("./router/auth");
const postsRoute = require("./router/posts");

//middleware
app.use("/api/users", userRoute);
app.use("/api/auth", authsRoute);
app.use("/api/posts", postsRoute);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

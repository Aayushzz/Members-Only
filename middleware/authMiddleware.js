const jwt = require("jsonwebtoken");
const Posts = require("../models/posts");
const authenticateUser = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = user;
    next();
  } catch (err) {
    const allPosts = await Posts.find({});
    console.log(allPosts);
    res.render("index", {
      allPosts: allPosts,
    });
    return;
  }
};
module.exports = authenticateUser;

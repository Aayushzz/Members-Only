const asyncHandler = require("express-async-handler");
const Posts = require("../models/posts");

exports.getIndex = asyncHandler(async (req, res, next) => {
  const Name = req.user.name;
  const allPosts = await Posts.find({});
  console.log(allPosts);
  res.render("index", {
    Name: Name,
    allPosts: allPosts,
  });
});

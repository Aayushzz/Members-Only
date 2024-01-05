const asyncHandler = require('express-async-handler');
const post = require('../models/posts');
exports.getForm = asyncHandler(async(req, res, next) => {
    const user = req.session.user;
    console.log(user.Name);
    res.render('createPost', {
        Name: user.Name,
    })
});

exports.createPost = asyncHandler(async(req, res, next) => {
    const user = req.session.user;
    const newPost = new post({
        user: user._id,
        creator: user.Name, 
        title: req.body.title,
        post: req.body.post,
    })
    
    await newPost.save();
    res.redirect('/');
})
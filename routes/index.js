const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');
const createPost = require('../controllers/createpostController');
const authenticateUser = require('../middleware/authMiddleware');


router.get("/", authenticateUser, (req, res) => {
  const Name = req.user.name;
  res.render("index", {Name: Name}); 
});

router.get('/sign-up', signupController.getForm);
router.post('/sign-up', signupController.createUser);
router.get('/log-out', (req, res) => {
  res.clearCookie('token');
  res.redirect('/')
})


router.get('/log-in', loginController.getForm);
router.post('/log-in', loginController.loginUser);
router.get('/post', createPost.getForm);
module.exports = router;

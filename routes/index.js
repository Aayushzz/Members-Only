const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');
const loginController = require('../controllers/loginController');
const createpostController = require('../controllers/createpostController');
const authenticateUser = require('../middleware/authMiddleware');
const indexController = require('../controllers/indexController')

router.get('/', authenticateUser, indexController.getIndex);

router.get('/sign-up', signupController.getForm);
router.post('/sign-up', signupController.createUser);
router.get('/log-out', (req, res) => {
  res.clearCookie('token');
  res.redirect('/')
})


router.get('/log-in', loginController.getForm);
router.post('/log-in', loginController.loginUser);
router.get('/post', authenticateUser, createpostController.getForm);
router.post('/post', createpostController.createPost);
module.exports = router;

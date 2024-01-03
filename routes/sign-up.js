const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

router.get('/', signupController.getForm);
router.post('/', signupController.createUser);

module.exports = router;
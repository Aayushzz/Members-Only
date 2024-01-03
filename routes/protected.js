const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');

router.get('/', authenticateUser, (req, res) => {
    res.send(`This is a protected route`);
})

module.exports = router;
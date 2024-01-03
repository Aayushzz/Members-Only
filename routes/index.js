const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');

router.get("/", authenticateUser, (req, res) => {
  const Name = req.user.name;
  res.render("index", {Name: Name}); 
});

module.exports = router;

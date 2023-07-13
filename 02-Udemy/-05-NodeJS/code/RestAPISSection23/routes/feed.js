const express = require("express");
const router = express.Router();
const feedController = require("../controllers/feed");
// GET /feed/posts
router.post("/login", feedController.login);
router.post("/register", feedController.register);

module.exports = router;

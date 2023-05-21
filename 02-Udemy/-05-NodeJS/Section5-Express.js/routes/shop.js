const express = require("express");
// to use absolute pathes and to use the files from this project not the operaying system
const path = require("path");
// ...........
const router = express.Router();
router.get("/", (req, res, next) => {
  // res.send("<h1>Hello</h1>");
  // ../ means go up one level
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});
module.exports = router;

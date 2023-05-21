const express = require("express");
// the same problem in creating absolute path
const path = require("path");
// .........
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("in another middleware");
  // if it the last middle ware we can make a response here
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;

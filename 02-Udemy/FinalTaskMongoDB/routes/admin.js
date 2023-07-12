const express = require("express");
const path = require("path");
const router = express.Router();
// const user = require("../models/user");
const additionalData = require("../models/additionalData");
let email;
let password;
let confirmPassword;
router.get("/login", (req, res, next) => {
  // for using ejs
  res.render("login", { pageTitle: "Log In" });
});
router.post("/login", (req, res, next) => {
  const LogInEmail = req.body.email;
  const LogInPassword = req.body.password;
  additionalData
    .findbyId(LogInEmail)
    .then((user) => {
      if (!user) {
        console.log("notFound");
        res.redirect("/signup");
      } else {
        console.log("Found", user._id);
        res.redirect("/tasks");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/tasks", (req, res, next) => {
  // for using ejs
  res.render("navigation", { pageTitle: "Tasks" });
});

router.get("/signup", (req, res, next) => {
  // for using ejs
  res.render("signUp", { pageTitle: "Sign Up" });
});
router.post("/signup", (req, res, next) => {
  email = req.body.email;
  password = req.body.password;
  confirmPassword = req.body.confirmPassword;
  // userInst = new user(email, password, confirmPassword, null, null, null);
  // userInst
  //   .save()
  //   .then((result) => {
  //     console.log("created User");
  res.redirect("/completeSignUp");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});
router.get("/completeSignUp", (req, res, next) => {
  res.render("completeSignUp", { pageTitle: "Complete Sign Up" });
});
router.post("/completeSignUp", (req, res, next) => {
  const userName = req.body.userName;
  const phone = req.body.phone;
  const birthDay = req.body.birthDay;
  const additionalDataInst = new additionalData(
    email,
    password,
    confirmPassword,
    userName,
    phone,
    birthDay
  );
  additionalDataInst
    .save()
    .then((result) => {
      console.log("created additionalDataInst");
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;

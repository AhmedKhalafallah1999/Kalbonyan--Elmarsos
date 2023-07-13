const express = require("express");
const path = require("path");
const router = express.Router();
const bcrypt = require("bcryptjs");
// const user = require("../models/user");
const additionalData = require("../models/additionalData");
let email;
let password;
let confirmPassword;
router.get("/login", (req, res, next) => {
  // for using ejs
  if (req.session.isLoggedIn === true) {
    res.redirect("/tasks");
  } else {
    res.render("login", {
      pageTitle: "Log In",
      messageError: req.flash("error"),
    });
  }
});
router.post("/login", (req, res, next) => {
  const LogInEmail = req.body.email;
  const LogInPassword = req.body.password;
  additionalData
    .findOne({ email: LogInEmail })
    .then((user) => {
      if (!user) {
        req.flash("error", "Invalid Email or Password");
        console.log("notFound");
        return res.redirect("/login");
      }
      bcrypt
        .compare(LogInPassword, user.password)
        .then((doMatch) => {
          if (doMatch) {
            //  res.setHeader("set-cookie", "loggedIn=true");
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save((err) => {
              console.log(err);
              return res.redirect("/tasks");
            });
          } else {
            req.flash("error", "Invalid Email or Password");
            return res.redirect("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect("/login");
    console.log(err);
  });
});
router.get("/tasks", (req, res, next) => {
  // for using ejs
  res.render("navigation", { pageTitle: "Tasks" });
});

router.get("/signup", (req, res, next) => {
  // for using ejs
  res.render("signUp", {
    pageTitle: "Sign Up",
    messageError: req.flash("errorSignup"),
  });
});
router.post("/signup", (req, res, next) => {
  email = req.body.email;
  password = req.body.password;
  confirmPassword = req.body.confirmPassword;
  additionalData
    .findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        req.flash("errorSignup", "Email is Exist, Please Log In instead");
        return res.redirect("/signup");
      } else {
        res.redirect("/completeSignUp");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/completeSignUp", (req, res, next) => {
  res.render("completeSignUp", { pageTitle: "Complete Sign Up" });
});
router.post("/completeSignUp", (req, res, next) => {
  const userName = req.body.userName;
  const phone = req.body.phone;
  const birthDay = req.body.birthDay;
  return bcrypt.hash(password, 12).then((hashedPassword) => {
    const additionalDataInst = new additionalData({
      email: email,
      password: hashedPassword,
      confirmPassword: confirmPassword,
      userName: userName,
      phone: phone,
      birthDay: birthDay,
    });
    return additionalDataInst
      .save()
      .then((result) => {
        console.log(result);
        console.log("created additionalDataInst");
        res.redirect("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
module.exports = router;

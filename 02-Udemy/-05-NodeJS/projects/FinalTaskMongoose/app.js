const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const falsh = require("connect-flash");
const session = require("express-session");
const mongoDBStore = require("connect-mongodb-session")(session);
const store = new mongoDBStore({
  uri: "mongodb+srv://ahmedkhabdelshafy:Mennafawzy@cluster0.v0yucvm.mongodb.net/users",
  collection: "sessions",
});
const app = express();
// to use EJS after downloading it
app.set("view engine", "ejs");
app.set("views", "views");
// for access css files
app.use(express.static(path.join(__dirname, "views")));
// for making body barser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(falsh());
// for using routes
const adminRoutes = require("./routes/admin");
// ..........................................................
app.use(adminRoutes);
mongoose
  .connect(
    "mongodb+srv://ahmedkhabdelshafy:Mennafawzy@cluster0.v0yucvm.mongodb.net/users?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

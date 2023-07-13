const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// for using template engine of ejs engine

app.set("view engine", "ejs");
// to go to the views to use these template
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Error404" });
});

app.listen(3000);

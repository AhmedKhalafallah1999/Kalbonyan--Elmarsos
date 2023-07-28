const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// for using template engine of pug engine
app.set("view engine", "pug");
// to go to the views to use these template
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //   res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { docType: "Error404" });
});

app.listen(3000);
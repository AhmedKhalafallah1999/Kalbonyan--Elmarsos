const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// to use EJS after downloading it
app.set("view engine", "ejs");
app.set("views", "views");
// for access css files
app.use(express.static(path.join(__dirname, "views")));
// for making body barser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// for using routes
const adminRoutes = require("./routes/admin");
// for connecting MongoDb
const mongoConnect = require("./util/database").mongoConnect;
// ..........................................................
app.use(adminRoutes);
// const server = http.createServer(app);
// server.listen(3000);
//  For runnigng MongoDb
mongoConnect(() => {
  app.listen(3000);
});

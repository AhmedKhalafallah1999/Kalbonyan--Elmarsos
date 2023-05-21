const http = require("http");
// the same problem of path
const path = require("path");
//....
const express = require("express");
// then we can use it as a fuction to manage alot of thing behind the scene
const app = express();
// for calling files
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// we can use it in creating a server
// we can import parser for icoming requests
const bodyParser = require("body-parser");
// this must be in the first
app.use(bodyParser.urlencoded({ extended: false }));
// we can :::
app.use("/", (req, res, next) => {
  console.log("in the middleware");
  // we call next to go to the next middleware, to make our request continue
  next();
});
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

const server = http.createServer(app);
// then we can run npm start, you can't see any thing because app can't handle
// anything because we didn't define any logic at this point, so we will
// return a head and using app to add middleware packges
server.listen(3000);
// rather than using createserver and listen to 3000
// we can use one way
// *********************** code
// app.listen(3000)

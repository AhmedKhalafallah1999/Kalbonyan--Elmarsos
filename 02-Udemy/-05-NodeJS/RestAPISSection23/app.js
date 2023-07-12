const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const feedRoutes = require("./routes/feed");
// for using body parser, but we have't form data so we will not write
// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// so,
app.use(bodyParser.json()); // application/json for incoming request for using in body request to extract them from into

//  To use and run on another server as a client differ
//  to clear the CORS error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
  // so every request will be sent will hava these headers
});
// here we put the first parameter to filter the pathes to send http request for which start with it
app.use("/feed", feedRoutes);

app.listen(8080);

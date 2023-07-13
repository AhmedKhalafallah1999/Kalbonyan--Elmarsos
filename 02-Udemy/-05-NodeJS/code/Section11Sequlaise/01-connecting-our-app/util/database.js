const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const mongoConnect = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://ahmedkhabdelshafy:Mennafawzy1999@cluster0.mipdw2w.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = mongoConnect;

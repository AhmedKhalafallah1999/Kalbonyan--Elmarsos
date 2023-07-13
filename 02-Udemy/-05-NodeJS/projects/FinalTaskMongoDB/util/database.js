const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://ahmedkhabdelshafy:Mennafawzy@cluster0.v0yucvm.mongodb.net/users?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No DB connection";
};
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

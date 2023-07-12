const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
let _db;
const mongoConnect = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://ahmedkhabdelshafy:Mennafawzy1999@cluster0.mipdw2w.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("connected");
      _db=client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
const getDb = ()=>{
  if (_db){
    return _db;
  }
  throw('No DB connection');
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
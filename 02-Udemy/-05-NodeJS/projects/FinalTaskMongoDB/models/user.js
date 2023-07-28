// for converting and compating the ids
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const getDb = require("../util/database").getDb;
class User {
  constructor(
    email,
    password,
    confirmPassword,
    // userName,
    // phone,
    // birthDay
  ) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    // this.userName = userName;
    // this.phone = phone;
    // this.birthDay = birthDay;
  }
  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findbyId(userId) {
    const db = getDb();
    return db.collection("users").findOne({ _id: new ObjectId(userId) });
  }
}
module.exports = User;
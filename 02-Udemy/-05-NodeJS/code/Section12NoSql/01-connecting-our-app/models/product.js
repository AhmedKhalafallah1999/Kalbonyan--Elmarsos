const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;
class Product {
  constructor(title, description, imageUrl, price, prodId, userId) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this._id = prodId ? new mongodb.ObjectId(prodId) : null;
    this.userId = userId;
  }
  save() {
    if (this._id) {
      const db = getDb();
      return db
        .collection("products")
        .updateOne({ _id: this._id }, { $set: this })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const db = getDb();
      return db
        .collection("products")
        .insertOne(this)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        console.log(products);
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((prod) => {
        console.log(prod);
        return prod;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then((result) => {
        console.log("deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;

// const products = [];
const { error } = require("console");
// rather than storing data in an array
const fs = require("fs");
const path = require("path");
module.exports = class Product {
  constructor(t) {
    this.title = t;
    // this.products = [];
  }
  sava() {
    // products.push(this);
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (error, fileContent) => {
      let products = [];
      if (!error) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callback) {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );

    fs.readFile(p, (error, fileContent) => {
      if (error) {
        return [];
        callback([]);
      }
      callback(JSON.parse(fileContent));
    });
  }
};

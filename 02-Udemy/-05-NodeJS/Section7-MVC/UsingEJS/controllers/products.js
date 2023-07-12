// const products = [];

const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formCSS: true,
  });
};
exports.post = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.sava();
  res.redirect("/");
};
exports.postAddProduct = (req, res, next) => {
  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // const products = adminData.products;lconst
  // const products = Product.fetchAll((products));
  // res.render("shop", {
  //   prods: products,
  //   pageTitle: "shop",
  //   path: "/",
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true,
  // });
 Product.fetchAll((products)=>{
  res.render("shop", {
    prods: products,
    pageTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
 });
};

exports.error404 = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Error404" });
};

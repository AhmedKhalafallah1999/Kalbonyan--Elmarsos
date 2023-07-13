const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const producsController = require("../controllers/products");
const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get("/add-product", producsController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", producsController.post);

// exports.routes = router;
// exports.products = products;
module.exports = router;

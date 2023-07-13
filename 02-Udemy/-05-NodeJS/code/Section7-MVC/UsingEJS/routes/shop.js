const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const producsController = require("../controllers/products");

const adminData = require("./admin");

const router = express.Router();

router.get("/",producsController.postAddProduct );

module.exports = router;

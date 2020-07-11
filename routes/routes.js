const express = require("express");
const router = express.Router();
const products = require("../controllers/ProductController");
const orders = require("../controllers/orderController");
router.route("/").get(products.getProducts);
router.route("/addProducts").post(products.createProducts);
router.route("/getProductDetailsById/").post(products.getProductDetailsById);
router.route("/saveOrders").post(orders.createOrders);
module.exports = router;

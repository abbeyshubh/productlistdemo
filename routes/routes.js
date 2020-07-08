const express = require("express");
const router = express.Router();
const products = require("../controllers/ProductController");

router.route("/addProducts").post(products.createProducts);
router.route("/").get(products.getProducts);
// router.route("/:id").put(products.updateCats);
router.route("/getProductDetailsById/").post(products.getProductDetailsById);
module.exports = router;

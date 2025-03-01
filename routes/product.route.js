const express = require("express");
const router = express.Router();
const ProductCotroller = require("../controllers/product.controller");

router.post("/", ProductCotroller.addProduct);

router.get("/", ProductCotroller.getAllProducts);

router.get("/:id", ProductCotroller.getProductById);

router.put("/:id", ProductCotroller.updateProductById);

router.delete("/:id", ProductCotroller.deleteProductById);

module.exports = router;

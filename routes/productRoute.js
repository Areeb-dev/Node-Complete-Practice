const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController.js");
const auth = require("../middlewares/auth");

// router.post("/products", auth,  createProduct);

// router.get("/products", getProduct);

// router.delete("/products/:id", auth, deleteProduct);

// router.put("/products/:id", auth, updateProduct);

router.post("/products", createProduct);

router.get("/products", getProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategory,
} = require("../controllers/categoryController.js");

router.post("/category", createCategory);

router.get("/category", getCategory);

module.exports = router;

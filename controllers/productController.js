const Product = require("../models/Product");

const Category = require("../models/Category");

module.exports = {
  createProduct: async (req, res) => {
    try {
      const { name, price, description, cat_id } = req.body;
      const addProduct = await new Product({
        name,
        price,
        description,
        cat_id,
      });
      await addProduct.save();

      return res.status(201).send({
        statusCode: 201,
        success: true,
        message: "Product Created",
      });
    } catch (error) {
      console.log("Error", error);

      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  getProduct: async (req, res) => {
    const getAllProduct = await Product.find({}).populate("cat_id");

    try {
      return res.status(200).send({
        statusCode: 200,
        success: true,
        data: getAllProduct,
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;

      await Product.findByIdAndDelete(id);

      return res.status(201).send({
        statusCode: 200,
        success: true,
        message: "Delete Product sucessfully",
      });
    } catch (error) {
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, price, description } = req.body;
      await Product.findByIdAndUpdate(id, req.body);

      return res.status(201).send({
        statusCode: 200,
        success: true,
        message: "update Product sucessfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
};

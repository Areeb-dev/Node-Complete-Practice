const Category = require("../models/Category");
module.exports = {
  createCategory: async (req, res) => {
    try {
        console.log(req.body);
      const { name } = req.body;
      console.log("test ==> ",name);
      const addCategory = await Category.create({
        name,
      });
      return res.status(200).send({
        statusCode: 200,
        success: true,
        message: "create Category sucessfully",
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
  getCategory: async (req, res) => {
    try {
      const getAllCategory =await Category.find({});
      return res.status(200).send({
        statusCode: 200,
        success: true,
        message: "get Category sucessfully",
        data: getAllCategory,
      });
    } catch (error) {
      console.log("error", error);
      return res.status(500).send({
        statusCode: 500,
        success: false,
        message: "Server Error",
      });
    }
  },
};

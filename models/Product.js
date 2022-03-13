const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    cat_id: { type: mongoose.Types.ObjectId, ref: 'Category'},
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
  },
});
const Product = mongoose.connection.modelNames().includes("Product")
  ? mongoose.model("Product")
  : mongoose.model("Product", ProductSchema);

export default Product;

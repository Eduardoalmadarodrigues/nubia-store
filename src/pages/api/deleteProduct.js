const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eduardo-teste:Eduardo090392@cluster0.5s5wmmi.mongodb.net/?retryWrites=true&w=majority";
import Product from "../../models/product.model";

export default function handler(req, res) {
  mongoose.connect(uri, { useNewUrlParser: true });
  const { name } = JSON.parse(req.body);
  Product.deleteOne({ name: name }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Product deleted successfully!");
      res.status(200).end();
    }
  });
}

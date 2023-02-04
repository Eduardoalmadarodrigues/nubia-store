const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eduardo-teste:Eduardo090392@cluster0.5s5wmmi.mongodb.net/?retryWrites=true&w=majority";

import Product from "../../models/product.model";

export default function handler(req, res) {
  mongoose.connect(uri, { useNewUrlParser: true });
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(products);
    }
  });
}

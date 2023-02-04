const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eduardo-teste:Eduardo090392@cluster0.5s5wmmi.mongodb.net/?retryWrites=true&w=majority";

import Product from "../../models/product.model";

export default function handler(req, res) {
  mongoose.connect(uri, { useNewUrlParser: true });
  const { data, oldName } = JSON.parse(req.body);
  const { name, description, price } = data;
  Product.findOneAndUpdate(
    { name: oldName },
    { name: name, description: description, price: price },
    (err) => {
      if (err) {
        console.log("err");
      } else {
        console.log("Product updated successfully!");
        res.status(200).end();
      }
    }
  );
}

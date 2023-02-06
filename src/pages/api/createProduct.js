const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eduardo-teste:Eduardo090392@cluster0.5s5wmmi.mongodb.net/?retryWrites=true&w=majority";
import Product from "../../models/product.model";

export default function handler(req, res) {
  mongoose.connect(uri, { useNewUrlParser: true });
  const { name, description, price , image } = JSON.parse(req.body);
  const newProduct = new Product({
    name: name,
    description: description,
    price: price,
    image: image,
    createdAt: Date.now(),
  });
  newProduct.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).end();
    }
  });
}

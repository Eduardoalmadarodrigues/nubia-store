const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eduardo-teste:Eduardo090392@cluster0.5s5wmmi.mongodb.net/?retryWrites=true&w=majority";
import User from "../../models/user.model";

export default function handler(req, res) {
  mongoose.connect(uri, { useNewUrlParser: true });
  const { name, email, password, image } = JSON.parse(req.body);
  const newUser = new User({
    name: name,
    email: email,
    password: password,
    image: image,
    createdAt: new Date(),
  });
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("usuario cadastrado");
      res.status(200).end();
    }
  });
}

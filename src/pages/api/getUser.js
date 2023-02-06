const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eduardo-teste:Eduardo090392@cluster0.5s5wmmi.mongodb.net/?retryWrites=true&w=majority";
import User from "../../models/user.model";

export default function handler(req, res) {
  const { userName, password } = JSON.parse(req.body);
  mongoose.connect(uri, { useNewUrlParser: true });
  User.find({ name: userName, password: password }, (err, User) => {
    if (err) {
      console.log(err);
    } else {
      if (User.length > 0) {
        res.status(200).end(JSON.stringify(User[0]));
      } else {
        res.status(200).end(
          JSON.stringify({
            error: "suas credenciais estão incorretas",
          })
        );
      }
    }
  });
}

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://eduardo-teste:Eduardo090392@cluster0.5s5wmmi.mongodb.net/?retryWrites=true&w=majority";
import User from "../../models/user.model";

export default function handler(req,res){
    const { userName,passWord} = JSON.parse(req.body);
    mongoose.connect(uri,{useNewUrlParser: true});
    User.find(({ name: userName,passWord:passWord} , (err , User)=>{
        if(err){
 console.log(err)           
        }else{
            console.log(User)
            res.status(200).end(User);
        }
    })) 
}
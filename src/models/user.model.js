const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.connection.modelNames().includes("User")
  ? mongoose.model("User")
  : mongoose.model("User", UserSchema);

export default User;

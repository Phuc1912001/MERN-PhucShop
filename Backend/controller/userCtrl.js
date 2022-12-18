const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  // lấy email từ req.body
  const email = req.body.email;
  // tìm user từ trong bảng user
  const findUser = await User.findOne({ email });
  if (!findUser) {
    // Create a new  User
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // User already exited
    throw new Error("user already exists");
  }
});

module.exports = { createUser };

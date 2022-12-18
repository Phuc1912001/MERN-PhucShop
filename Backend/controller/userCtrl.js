const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");

// register user
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

// login user
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("invalid credentials");
  }
});

// get all user
const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// get a signUser

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
});

module.exports = { createUser, loginUserCtrl, getallUser, getUser };

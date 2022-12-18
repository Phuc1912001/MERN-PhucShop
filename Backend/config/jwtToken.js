const jwt = require("jsonwebtoken");

// tạo mã thông báo
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

module.exports = { generateToken };

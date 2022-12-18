const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getUser,
} = require("../controller/userCtrl");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/:id", getUser);

module.exports = router;

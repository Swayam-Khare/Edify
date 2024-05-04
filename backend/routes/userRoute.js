const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/")
  .get(authController.protect, userController.getUser)
  .patch(authController.protect, userController.updateUser);

module.exports = router;
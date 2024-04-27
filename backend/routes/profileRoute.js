const express = require("express");
const profileController = require("./../controllers/profileController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/")
    .get(authController.protect, profileController.getProfile)
    .patch(authController.protect, profileController.updateProfile);

module.exports = router;
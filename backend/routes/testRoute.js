const express = require("express");
const testController = require("./../controllers/testController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/start").post(authController.protect, testController.startTest);
router.route("/mock/:subject").get(authController.protect, testController.mockTest);
router.route("/submit").post(authController.protect, testController.calculateScore, testController.submitTest);

module.exports = router;
const express = require("express");
const testController = require("./../controllers/testController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/start").post(authController.protect, testController.startTest);
router
  .route("/mock/:subject")
  .post(authController.protect, testController.mockTest);
router
  .route("/submit")
  .post(
    authController.protect,
    testController.calculateScore,
    testController.submitTest
  );
router.route("/add").post(testController.addQuestion);

module.exports = router;

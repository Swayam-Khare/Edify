const express = require("express");
const testDetailsController = require("./../controllers/testDetailsController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").get(authController.protect, testDetailsController.getTestDetails);
router.route("/last-report").get(authController.protect, testDetailsController.getLastReport);

module.exports = router;
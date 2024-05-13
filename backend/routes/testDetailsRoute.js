const express = require("express");
const testDetailsController = require("./../controllers/testDetailsController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").get(authController.protect, testDetailsController.getAllTestDetails);
router.route("/:subject").get(authController.protect, testDetailsController.getTestDetails);
router.route("/last-report").get(authController.protect, testDetailsController.getLastReport);
router.route("/:id/report").get(authController.protect, testDetailsController.getReport);

module.exports = router;
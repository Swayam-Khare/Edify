const express = require("express");
const testDetailsController = require("./../controllers/testDetailsController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").post(authController.protect, testDetailsController.getAllTestDetails);
router.route("/:subject").post(authController.protect, testDetailsController.getTestDetails);
router.route("/last-report/:subject").post(authController.protect, testDetailsController.getLastReport);
router.route("/:id/report").post(authController.protect, testDetailsController.getReport);

module.exports = router;
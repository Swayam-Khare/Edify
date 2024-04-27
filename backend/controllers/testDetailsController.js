const TestDetails = require("../models/TestDetails");

exports.getTestDetails = async (req, res) => {
  try {
    const testDetails = await TestDetails.find({ user_id: req.user._id, subject: req.params.subject});

    res.status(200).json({
      status: "success",
      data: {
        testDetails,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.getLastReport = async (req, res) => {
  try {
    const testDetails = await TestDetails.find({ user_id: req.user._id}).sort({createdAt: -1}).limit(1);

    if (testDetails.length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "No test details found",
      });
    }

    const report = await Report.findById(testDetails[0].report_id);

    res.status(200).json({
      status: "success",
      data: {
        testDetails: testDetails[0],
        report,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}

exports.getReport = async (req, res) => {
  try {
    const testDetails = await TestDetails.findById(req.params.id);

    if (!testDetails) {
      return res.status(400).json({
        status: "fail",
        message: "No test details found",
      });
    }

    const report = await Report.findById(testDetails.report_id);

    res.status(200).json({
      status: "success",
      data: {
        testDetails,
        report,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}
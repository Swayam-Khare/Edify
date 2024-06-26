const Question = require("../models/questionModel");
const TestDetails = require("../models/testDetailsModel");
const Report = require("../models/reportModel");
const { conn } = require("../models/db");
console.log("hello", conn);

exports.startTest = async (req, res) => {
  // fetch 15 questions of given subject, difficulty level.
  // send questions to frontend

  let { subject, difficulty } = req.body;

  switch (difficulty) {
    case "Easy":
      difficulty = [1, 2];
      break;
    case "Medium":
      difficulty = [3, 4];
      break;
    case "Hard":
      difficulty = [5];
      break;
    default:
      difficulty = [1, 2, 3, 4, 5];
  }

  try {
    const questions = await Question.aggregate([
      { $match: { subject, difficulty: { $in: difficulty } } },
      { $sample: { size: 15 } },
    ]);

    res.status(200).json({
      status: "success",
      data: {
        questions,
        subject,
        difficulty,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.mockTest = async (req, res) => {
  // fetch 15 questions of given subject, difficulty level.
  // send questions to frontend

  const subject = req.params.subject;

  try {
    const questions = await Question.aggregate([
      { $match: { subject } },
      { $sample: { size: 15 } },
    ]);

    res.status(200).json({
      status: "success",
      data: {
        questions,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.submitTest = async (req, res) => {
  // calculate score
  // save test details in database
  // send score to frontend

  const { subject, questions, answers, difficulty, duration } = req.body;
  const user_id = req.user._id;

  const score = req.body.score;
  const summary = req.body.summary;

  let session = await conn.startSession();

  const questionIds = questions.map((question) => question._id);

  try {
    session.startTransaction();

    // Create report
    const report = await Report.create(
      [
        {
          topics: summary.topics,
          strengths: summary.strength,
          scores: summary.scores,
        },
      ],
      { session }
    );

    console.log("report", report);

    // Create test details
    let testDetails = await TestDetails.create(
      [
        {
          user_id,
          subject,
          questionIds,
          answers,
          difficulty,
          duration,
          score,
          report_id: report[0]._id,
        },
      ],
      { session }
    );

    await session.commitTransaction();

    res.status(200).json({
      status: "success",
      data: {
        testDetails,
        report,
      },
    });
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.addQuestion = async (req, res) => {
  const {
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    answer,
    subject,
    difficulty,
    topic,
  } = req.body;

  const options = [optionA, optionB, optionC, optionD];

  try {
    const newQuestion = await Question.create({
      question,
      options,
      answer,
      subject,
      difficulty,
      topic,
    });

    res.status(200).json({
      status: "success",
      message: "Question added successfully",
      data: {
        question: newQuestion,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.calculateScore = async (req, res, next) => {
  const { questions, answers } = req.body;

  // topic frequency object
  const topicFrequency = {};
  questions.forEach((question) => {
    if (topicFrequency[question.topic]) {
      topicFrequency[question.topic] += 1;
    } else {
      topicFrequency[question.topic] = 1;
    }
  });

  // topics array
  const topics = Object.keys(topicFrequency);

  // topic score object
  const topicScore = {};
  topics.forEach((topic) => {
    topicScore[topic] = 0;
  });

  let score = 0;
  questions.forEach((question, index) => {
    if (question.answer === answers[index]) {
      score += 10;
      topicScore[question.topic] += 1;
    }
  });

  // Score array
  let scores = [];
  for (let i = 0; i < topics.length; i++) {
    let topic = topics[i];
    scores.push(topicScore[topic] / topicFrequency[topic]);
  }

  // Strength array
  let strength = [];
  for (let i = 0; i < scores.length; i++) {
    let strengthValue = "";

    if (scores[i] >= 0.75) {
      strengthValue = "Strong";
    } else if (scores[i] >= 0.5) {
      strengthValue = "Average";
    } else {
      strengthValue = "Weak";
    }

    strength.push(strengthValue);
  }

  req.body.summary = {
    topics,
    scores,
    strength,
  };
  req.body.score = score;
  next();
};

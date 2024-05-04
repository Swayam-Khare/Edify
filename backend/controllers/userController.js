const User = require('../models/userModel');

exports.getUser = async (req, res) => {
  if (req.user) {
    return res.status(20).json({
      status: 'success',
      data: {
        user: req.user,
      },
    });
  }

  res.status(404).json({
    status: 'fail',
    message: 'User not found',
  });
}

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  }
  catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
}
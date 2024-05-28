const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const AdminReview = require("../../models/Admin/adminReviewModel");
const { validationResult } = require('express-validator');
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const reviewsList = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token } = req.body;
  if (!input || !token ) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await AdminLoginRegister.findOne({ input });
    if (!admin) {
      return res.status(404).json({ message: "Review Lists not found" });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== admin._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const review = await AdminReview.find({});

    res.status(200).json({
      success: true,
      review: review,
      message: "reviews Granted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const createReviewsList = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, reviews } = req.body;

  if (!input || !token || !reviews) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await  AdminLoginRegister.findOne({ input });
    if (!admin) {
      return res.status(404).json({ message: "Review Lists not found" });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== admin._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newReview = new AdminReview(reviews)
    await newReview.save()

    res.status(200).json({
      success: true,
      review: newReview,
      message: "reviews created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { reviewsList, createReviewsList };
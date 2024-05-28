const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken");
const Profile = require("../../models/Admin/adminProfileModel");
const { validationResult } = require('express-validator');


const profiles = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { adminEmail, token } = req.body;

  try {
    const admin = await Admin.findOne({ email: adminEmail });
    if (!admin) {
      return res.status(404).json({ message: "Profiles not found" });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== admin._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const profiles = await Profile.find({});

    res.status(200).json({
      success: true,
      adminProfiles: profiles,
      message: "Profiles Granted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


const createProfiles = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, profile } = req.body;

  
  if (!input || !token || !Profile) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await Admin.findOne({ input });
    if (!admin) {
      return res.status(404).json({ message: "Profiles not found" });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== admin._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newProfiles = new Profile(profile);
    
    await newProfiles.save()

    res.status(200).json({
      success: true,
      adminProfiles: profiles,
      message: "Profiles created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = { profiles , createProfiles };
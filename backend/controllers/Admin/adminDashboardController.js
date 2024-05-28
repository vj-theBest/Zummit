const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity"); 
const DashboardReview = require("../../models/Admin/AdminDashboard/dashboardReviewModel");
const jwt = require("jsonwebtoken"); 
const { validationResult } = require('express-validator');

const adminDashboard = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input, token } = req.body;
    if (!input || !token) {
      return res.status(402).json({ message: "Please fill all fileds" });
    }

    try {
      const admin = await Admin.findOne({ input });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

     
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedToken.id!== admin._id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      
      const doctorList = await Admin.find({});
      const dashboardReview = await DashboardReview.find({});

      res.status(200).json({
        success: true,
        doctorList: doctorList,
        reviews: dashboardReview,
        message: "Admin list Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});
    
module.exports = {
  adminDashboard,
  
};

const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken"); 
const Appointment = require("../../models/Admin/adminAppointmentModel");
const AdminReview = require("../../models/Admin/adminReviewModel");
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const addedReview = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input, token } = req.body;
    if (!input || !token) {
      return res.status(402).json({ message: "Please fill all fileds" });
    }

    try {
      const admin = await AdminLoginRegister.findOne({ input }).select(
        "-password"
      )
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

     
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (JSON.stringify(decodedToken.id)!== JSON.stringify(admin._id)) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const addedreview=await AdminReview.find({});

      res.status(200).json({
        success: true,
        addedReview:addedreview,
        message: "Added Reviews Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

module.exports=addedReview;
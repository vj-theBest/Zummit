const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken"); 
const Appointment = require("../../models/Admin/adminAppointmentModel");
const AdminReview = require("../../models/Admin/adminReviewModel");

const reviewsList = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { adminEmail, token } = req.body;

    try {
      const admin = await Admin.findOne({ email: adminEmail });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

     
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedToken.id!== admin._id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const review=await AdminReview.find({});

      res.status(200).json({
        success: true,
        review:review,
        message: "reviews Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

module.exports=reviewsList;
const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken"); 
const Appointment = require("../../models/Admin/adminAppointmentModel");
const AdminGroups = require("../../models/Admin/adminGroupsModel");

const groupsDetails = asyncHandler(async (req, res) => {
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

      const groupDetails=await AdminGroups.find({});

      res.status(200).json({
        success: true,
        groups:groupDetails,
        message: "Groups Details Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

module.exports=groupsDetails;
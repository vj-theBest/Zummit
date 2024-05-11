const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity");
const jwt = require("jsonwebtoken"); 
const Appointment = require("../../models/Admin/adminAppointmentModel");
const AdminTherapists = require("../../models/Admin/adminTherapist.Model");
const AdminTransaction = require("../../models/Admin/adminTransactionModel");

const transactions = asyncHandler(async (req, res) => {
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

      const transactions=await AdminTransaction.find({});

      res.status(200).json({
        success: true,
        transaction:transactions,
        message: "Transaction Details Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

module.exports=transactions
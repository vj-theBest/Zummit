const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity"); 
const rateLimit = require("express-rate-limit"); 
const { body, validationResult } = require("express-validator"); 

const adminDashboard = asyncHandler(async (req, res) => {
 
 adminDashboardLimiter(req, res, async () => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { adminId, token } = req.body;

    try {
      
      const admin = await Admin.findById(adminId);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }

 
      if (admin.token !== token) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (!admin.hasPermission) {
        return res.status(403).json({ message: "Insufficient permissions" });
      }

      
      if (!admin.whitelistedIPs.includes(req.ip)) {
        return res.status(403).json({ message: "IP not whitelisted" });
      }

      
      res.json({ message: "Welcome to the Admin Dashboard" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
 });
});


const appointmentsList = async(req,res) => {
    try {
        res.send("Appointments List");
    } catch (error) {
        console.log(error.message);
    }
}

const clientList = async(req,res) => {
    try {
      res.send("Client List");
    } catch (error) {
      console.log(error.message);
    }
}

const proflie = async(req,res) =>{
    try {
      res.send("Profile");
    } catch (error) {
      console.log(error.message);
    }
}

const groupsDetails = async(req,res) =>{
   try {
     res.send("Groups Details");
   } catch (error) {
     console.log(error.message);
   } 
}

const AddedReview = async(req,res) =>{
    try {
      res.send("added Review");
    } catch (error) {
      console.log(error.message);
    }
}

const reviews = async(req,res) =>{
    try {
        res.send("reviews");
    } catch (error) {
        console.log(error.message);
    }
}

const therapistsDetails = async(req,res) =>{
   try {
     res.send("Therapists Details");
   } catch (error) {
     console.log(error.message);
   } 
}

const transactions = async(req,res) =>{
    try {
      res.send("Transactions");
    } catch (error) {
      console.log(error.message);
    }
}


module.exports = {
  adminDashboard,
  appointmentsList,
  clientList,
  proflie,
  groupsDetails,
  AddedReview,
  reviews,
  therapistsDetails,
  transactions,
};

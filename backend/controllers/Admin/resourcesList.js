const asyncHandler = require("express-async-handler");
const Admin = require("../../models/Admin/AdminDashboard/adminSecurity"); 
const jwt = require("jsonwebtoken"); 
const AdminResources = require("../../models/Admin/adminResourcesModel");
const { validationResult } = require('express-validator');

const resources = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { adminEmail, token } = req.body;

    try {
      const admin = await Admin.findOne({ email: adminEmail });
      if (!admin) {
        return res.status(404).json({ message: "Resources list not found" });
      }

     
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (decodedToken.id!== admin._id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      
      const resources= await AdminResources.find({});

      res.status(200).json({
        success: true,
        resource:resources,
        message: "Resources Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

const createResource = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input , token, resource } = req.body;

  if (!input || !token || !resource) {
    return res.status(402).json({ message: "Please fill all fileds" });
  }

  try {
    const admin = await Admin.findOne({ input });
    if (!admin) {
      return res.status(404).json({ message: "Resources Lists not found" });
    }


    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.id !== admin._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newResource = new AdminResources(resource)
    await newResource.save()

    res.status(200).json({
      success: true,
      resources:newResource,
      message: "resources created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = {
  resources,createResource
};

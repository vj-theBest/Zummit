const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken"); 
const Appointment = require("../../models/Admin/adminAppointmentModel");
const { validationResult } = require('express-validator');
const AdminLoginRegister = require("../../models/Admin/AdminRegisterLogin/adminModel");

const appointmentsList = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { input, token } = req.body;

    try {
      const admin = await AdminLoginRegister.findOne({ input }).select(
        "-password"
      )
      if (!admin) {
        return res.status(404).json({ message: "Appointment list not found" });
      }

     
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      if (JSON.stringify(decodedToken.id)!== JSON.stringify(admin._id)) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const appointmentsLists=await Appointment.find({});
      

      res.status(200).json({
        success: true,
        adminAppointmentList:appointmentsLists,
        message: "Appointments list Granted"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
});

const createAppointment = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { input, token, appointmentData } = req.body;

  if (
    !input ||
    !token ||
    !appointmentData
  ) {
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
    if (JSON.stringify(decodedToken.id) !== JSON.stringify(admin._id)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newAppointment = new Appointment(appointmentData);

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
      appointment: newAppointment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports={appointmentsList,createAppointment};
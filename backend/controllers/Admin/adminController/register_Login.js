const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AdminLoginRegister = require("../../../models/Admin/AdminRegisterLogin/adminModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, input, password, role } = req.body;

  if (!name || !input || !password || !role) {
    return res.status(400).json({ message: "Please provide all fields" });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = new AdminLoginRegister({
      name,
      input,
      role,
      password: hashedPassword,
    });

    await admin.save();

     if (admin) {
       const { _id, input, role } = admin;
       const token = generateToken(_id);
       res.cookie("token", token, {
         path: "/",
         httpOnly: true,
         expires: new Date(Date.now() + 1000 * 86400),
       });
       res.status(201).json({
         success: true,
         admin,
         message: "Admin registered successfully.",
         token,
       });
     } else {
       res.status(400).json({ error: "Invalid admin data" });
     }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { input, password } = req.body;

  if (!input || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    const admin = await AdminLoginRegister.findOne({ input }).select(
      "+password"
    );

    if (!admin) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    const isMatch = await admin.matchPasswords(password);

    if (admin && isMatch) {
      res.status(200).json({
        success: true,
        admin,
        token: generateToken(admin._id),
      });
    } else {
      return res.status(400).json({ message: "Please check your password" });
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = {
  registerAdmin,
  loginAdmin,
};
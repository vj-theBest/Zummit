const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Therapist = require("../../models/Therapist/therapistModel");
const Admin = require("../../models/Admin/adminModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//admin middleware hey add karo 
const adminAuth = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ success: false, msg: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      return res.status(401).json({ success: false, msg: 'Not authorized as admin' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});


const createTherapist = asyncHandler(async (req, res) => {
  const { name, input, password, role } = req.body;
  const allowedDomain = "zummit.aroundwithin.com";
  const emailRegex = new RegExp(`^[^@]+@${allowedDomain}$`);

  if (!emailRegex.test(input)) {
    return res.status(400).json({ success: false, msg: 'Invalid email domain' });
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const registrationsToday = await Therapist.countDocuments({ registeredAt: { $gte: today }, admin: req.admin.id });

  if (registrationsToday >= 5) {
    return res.status(400).json({ success: false, msg: 'Registration limit reached for today' });
  }

  const therapistExists = await Therapist.findOne({ input });
  if (therapistExists) {
    res.status(400);
    throw new Error("Therapist already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const therapist = await Therapist.create({
    name,
    input,
    role,
    password: hashedPassword,
    admin: req.admin.id,
  });

  if (therapist) {
    const { _id, input, role } = therapist;
    console.log("ID is ", _id);
    const token = generateToken(_id);
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // secure: true,  // for deployment
      // sameSite: none
    });

    res.status(201).json({
      success: true,
      data: _id,
      name,
      input,
      role,
      token,
      message: "Registered successfully",
    });
  } else {
    res.status(400).json({ error: "Invalid therapist data" });
  }
});

const loginTherapist = asyncHandler(async (req, res) => {
  const { input, password } = req.body;

  if (!input || !password) {
    res.status(400);
    throw new Error("Please add email/phone & password");
  }

  const therapist = await Therapist.findOne({ input });

  if (!therapist) {
    res.status(400);
    throw new Error("Therapist does not exist");
  }

  const passwordIsCorrect = await bcrypt.compare(password, therapist.password);

  if (therapist && passwordIsCorrect) {
    const token = generateToken(therapist._id);
    const newTherapist = await Therapist.findOne({ input }).select("-password");
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // secure: true, // for deployment
      // sameSite: none
    });

    res.status(201).json({ newTherapist, "Authorization": token });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

const logoutTherapist = asyncHandler(async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({
    message: "Successfully logged out"
  });
});

const getTherapist = asyncHandler(async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, msg: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const therapist = await Therapist.findById(decoded.id).select('-password');
    if (!therapist) {
      return res.status(404).json({ success: false, msg: 'Therapist not found' });
    }

    res.status(200).json({
      success: true,
      data: therapist,
      msg: "Therapist found"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = {
  createTherapist,
  loginTherapist,
  logoutTherapist,
  getTherapist,
  adminAuth
};

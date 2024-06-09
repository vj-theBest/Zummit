const jwt = require("jsonwebtoken");
const AdminLoginRegister = require("../models/Admin/AdminRegisterLogin/adminModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await AdminLoginRegister.findById(decoded.id).select(
        "-password"
      );

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({
        message: "Not authorized, token failed",
      });
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401).json({
      message: "Not authorized, no token",
    });
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.role == "admin") {
    next();
  } else {
    res.status(401).json({
      message: "Not authorized as an admin",
    });
    throw new Error("Not authorized as an admin");
  }
};

const therapist = (req, res, next) => {
  if (req.user && req.user.role == "therapist") {
    next();
  } else {
    res.status(401).json({
      message: "Not authorized as a therapist",
    });
    throw new Error("Not authorized as a therapist");
  }
};

module.exports = { protect, admin, therapist };

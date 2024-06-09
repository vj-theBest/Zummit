require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = 4000;
const app = express();
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const bookingRoute = require("./routes/bookingRoute");
const therapistRoute=require("./routes/therapistRoute");
const Appointments = require("./models/Appointment/AppointmentModel");
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: [
      "https://zummit-chandan.vercel.app",
      "http://localhost:3000",
      "https://vaibhav-zummit-2.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);

//Routes
app.get("/", (req, res) => {
  res.send("homepage");
});
app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/therapist",therapistRoute);
app.get("/booking-details", async (req, res) => {
  const allBookings = await Appointments.find({});
  return res.send(allBookings);
});

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

const {
  MySqlConnect,
} = require("./controllers/Booking/BookingSlotsController");
MySqlConnect();

app.listen(PORT, () => {
  console.log(`app run at , ${PORT}`);
});

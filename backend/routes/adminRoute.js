const express = require("express");
const { adminDashboard } = require("../controllers/Admin/adminDashboardController");
const appointmentsList = require("../controllers/Admin/appointmentsList");
const clientsList = require("../controllers/Admin/clientList");
const profiles = require("../controllers/Admin/profile");
const groupsDetails = require("../controllers/Admin/groupDetails");
const reviewsList = require("../controllers/Admin/reviews");
const therapistsDetails = require("../controllers/Admin/therapistsDetails");
const transactions = require("../controllers/Admin/transactions");
const router = express.Router();

router.route("/adminDashboard").get(adminDashboard);
router.route("/appointmentslist").get(appointmentsList);
router.route("/clienlist").get(clientsList);
router.route("/profile").get(profiles);
router.route("/groupsdetails").get(groupsDetails);
router.route("/addedreview").get(reviewsList);
// router.route("/reviews").get(reviewsList);
router.route("/therapistsdetails").get(therapistsDetails);
router.route("/transactions").get(transactions);

module.exports = router;

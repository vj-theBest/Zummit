const express = require("express");
const { adminDashboard } = require("../controllers/Admin/adminDashboardController");
const  { appointmentsList, createAppointment } = require("../controllers/Admin/appointmentsList");
const {clientsList , createClient} = require("../controllers/Admin/clientList");
const { profiles , createProfiles } = require("../controllers/Admin/profile");
const { groupsDetails , CreategroupsDetails } = require("../controllers/Admin/groupDetails");
const {reviewsList, createReviewsList} = require("../controllers/Admin/reviews");
const {therapistsDetails,createtherapistsDetails} = require("../controllers/Admin/therapistsDetails");
const {transactions,createtransactions} = require("../controllers/Admin/transactions");
const {registerAdmin,loginAdmin} = require("../controllers/Admin/adminController/register_Login");
const { createResource } = require("../controllers/Admin/resourcesList");


const router = express.Router();

//Create API's
router.route("/createAppointmentLists").post(createAppointment );
router.route("/createClientLists").post(createClient);
router.route("/createCreategroupsDetails").post(CreategroupsDetails);
router.route("/createCreateProfiles").post(createProfiles);
router.route("/createTherapistsDetails").post(createtherapistsDetails);
router.route("/createTransactions").post(createtransactions);
router.route("/adminRegister").post(registerAdmin);
router.route("/adminLogin").post(loginAdmin);
router.route("/createResource").post(createResource);
router.route("/createReviews").post(createReviewsList);
//get API's
router.route("/adminDashboard").get(adminDashboard);
router.route("/appointmentslist").get(appointmentsList);
router.route("/clienlist").get(clientsList);
router.route("/profile").get(profiles);
router.route("/groupsdetails").get(groupsDetails);
router.route("/addedreview").get(reviewsList);
router.route("/reviews").get(reviewsList);
router.route("/therapistsdetails").get(therapistsDetails);
router.route("/transactions").get(transactions);

module.exports = router;

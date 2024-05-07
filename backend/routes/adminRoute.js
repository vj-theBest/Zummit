const express = require("express");
const router = express.Router();

const {
  adminDashboard,
  appointmentsList,
  clientList,
  groupsDetails,
  AddedReview,
  reviews,
  therapistsDetails,
  transactions,
  proflie,
} = require("../controllers/Admin/adminDashboardController");

router.route("/").get(adminDashboard);
router.route("/appointmentslist").get(appointmentsList);
router.route("/clienlist").get(clientList);
router.route("/profile").get(proflie);
router.route("/groupsdetails").get(groupsDetails);
router.route("/addedreview").get(AddedReview);
router.route("/reviews").get(reviews);
router.route("/therapistsdetails").get(therapistsDetails);
router.route("/transactions").get(transactions);


module.exports = router;

const express=require("express")
const router=express.Router();
const {getIndividualBooking,getTherapistDetails,getPatientDetails} = require('../controllers/Booking/BookingSlotsController')

router.get("/getAvailableSlotsByTherapist/:id",getIndividualBooking)
router.get("/getTherapistDetails/:id",getTherapistDetails)
router.get("/getPatientDetails/:id",getPatientDetails)


module.exports=router;

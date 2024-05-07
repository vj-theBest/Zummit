const asyncHandler = require("express-async-handler");

const adminDashboard=async(req,res)=>{
    try{
        if(token){
            
        }
    }catch(error){
        console.log(error);
    }
}

const appointmentsList = async(req,res) => {
    try {
        res.send("Appointments List");
    } catch (error) {
        console.log(error.message);
    }
}

const clientList = async(req,res) => {
    try {
      res.send("Client List");
    } catch (error) {
      console.log(error.message);
    }
}

const proflie = async(req,res) =>{
    try {
      res.send("Profile");
    } catch (error) {
      console.log(error.message);
    }
}

const groupsDetails = async(req,res) =>{
   try {
     res.send("Groups Details");
   } catch (error) {
     console.log(error.message);
   } 
}

const AddedReview = async(req,res) =>{
    try {
      res.send("added Review");
    } catch (error) {
      console.log(error.message);
    }
}

const reviews = async(req,res) =>{
    try {
        res.send("reviews");
    } catch (error) {
        console.log(error.message);
    }
}

const therapistsDetails = async(req,res) =>{
   try {
     res.send("Therapists Details");
   } catch (error) {
     console.log(error.message);
   } 
}

const transactions = async(req,res) =>{
    try {
      res.send("Transactions");
    } catch (error) {
      console.log(error.message);
    }
}


module.exports = {
  adminDashboard,
  appointmentsList,
  clientList,
  proflie,
  groupsDetails,
  AddedReview,
  reviews,
  therapistsDetails,
  transactions,
};
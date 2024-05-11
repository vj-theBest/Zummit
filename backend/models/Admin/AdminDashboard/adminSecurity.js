const { default: mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema({
    adminId: String,
    token: String,
   });

   const Admin=mongoose.model("Admin",adminSchema);
   module.exports=Admin;
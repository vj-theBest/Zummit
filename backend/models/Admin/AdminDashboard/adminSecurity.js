const { default: mongoose } = require("mongoose");

const adminSchema = new mongoose.Schema({
    adminId: String,
    token: String,
    hasPermission: Boolean,
    whitelistedIPs: [String],
   });

   const Admin=mongoose.model("Admin",adminSchema);
   module.exports=Admin;
const mongoose=require("mongoose");
const adminClientModel=mongoose.Schema(
    {
        clientId:{
            type:String,
        },
        clientName:{
            type:String,
            required:[true,"Please add your Name"]
        },
        therapistName:{
            type:String,
            required:[true,"Please add your Therapist Name"]
        },
        lastSession:{
            type:String,
            required:[true,"Please add last Sesssion"]
        }
    }
)

const Client=mongoose.model('Client',adminClientModel);
module.exports=Client;
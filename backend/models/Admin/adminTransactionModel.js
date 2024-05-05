const mongoose=require("mongoose");

const transaction=mongoose.Schema(
    {
        invoiceNumber:{
            type:Number,
            required:[true,"please add invoice number"]
        },
        clientId:{
            type:String,
            required:[true,"please add Client Id"]
        },
        clientName:{
            type:String,
            required: [true, "please add client name"]
        },
        doctorName:{
            type:String,
            required:[true,"please add doctor name"]
        },
        amount:{
            type:Number,
            required:[true,"please add amount"]
        },
        report:{
            type:String,
            required:[true,"please add report"]
        }
      }
)

const AdminTransaction=mongoose.model("AdminTransaction",transaction);
module.exports=AdminTransaction;
const mongoose=require("mongoose");

const appointment=mongoose.Schema(
    {
        clientName:{
            type:String,
            required:[true,"please add client name"]
        },
        appointmentTime:{
          date:{
            type:String,
            required:[true,"please add appointment date"]
          },
          time:{
            type:String,
            required:[true,"please add appointment time"]
          }
        },
        therapyType:{
            type:String,
            required:[true,"please add therapy type"]
        },
        amount:{
            type:String,
            required:[true,"please add amount"]
        },
        report:{
            type:String,
            required:[true,"please add report status"]
        },
        reason:{
            type:String,
            required:[true,"please add reason"]
        }
      },
)

const Appointment=mongoose.model("Appointmen",appointment);
module.exports=Appointment;
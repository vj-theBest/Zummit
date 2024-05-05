const mongoose=require("mongoose");

const doctorList=mongoose.Schema(
    {
        therapists:{
            type:String,
            required:[true,"please add therapist name"]
        },
        date:{
            type:String,
            required:[true,"please add date"]
        }
      },
)

const Doctorlist=mongoose.model('Doctorlist',doctorList);
module.exports=Doctorlist;
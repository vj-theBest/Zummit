const mongoose=require("mongoose");

const therapists=mongoose.Schema(
    {
        doctorName:{
            type:String,
            required:[true,"please add doctor name"]
        },
        appointments:{
            type:Number,
            required:[true,"please add appointments times"]
        },
        reviews:{
            type:Number,
            required:[true,"please give review out of 5"]
        },
        joiningDate:{
            type:Date,
            required:[true,"please add joining date"]
        }
      },
)

const AdminTherapists=mongoose.model("AdminTherapists",therapists);
module.exports=AdminTherapists;
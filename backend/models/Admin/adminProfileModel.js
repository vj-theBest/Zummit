const mongoose=require("mongoose");

const profile=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please add name"]
        },
        email:{
            type:String,
            required:[true,"please add email"]
        },
        phone:{
            type:String,
            required:[true,"please add your phone number"]
        },
        dateofBirth:{
            type:String,
            required:[true,"please add your date of birth"]
        }
      }
)
const Profile=mongoose.model("AdminProfile",profile);
module.exports=Profile;
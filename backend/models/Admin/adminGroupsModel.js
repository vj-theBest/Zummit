const mongoose=require("mongoose");

const groups=mongoose.Schema(
    {
        image:{
            type:String,
            required:[true,"please add group image"]
        },
        email:{
            type:String,
            required:[true,"please add email"]
        },
        groupName:{
            type:String,
            required:[true,"please add group name"]
        },
        purpose_Goals:{
            type:String,
            required:[true,"please add purpose or goals"]
        },
        sessionNumber:{
            type:Number,
            required:[true,"please add session number"]
        },
        slots:{
            type:Number,
            required:[true,"please a number of slots"]
        },
        startDate:{
            type:String,
            required:[true,"please add start date"]
        },
        price:{
            type:Number,
            required:[true,"please add price"]
        },
        time:{
          shift:{
            type:String,
            required:[true,"please add shift"]
          },
          hours:{
            type:Number,
            required:[true,"please add hours"]
          }
        },
        selectDay:{
            type:String,
            required:[true,"please add a week day"]
        }
      },
      
)

const AdminGroups=mongoose.model("AdminGroups",groups);
module.exports=AdminGroups;
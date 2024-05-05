const mongoose=require("mongoose");

const resources=mongoose.Schema(
    {
        image:{
            type:String,
            required:[true,"please add resource image"]
        },
        title:{
            type:String,
            required:[true,"please add resource title"]
        },
        review:{
            type:String,
            required:[true,"please add resource review"]
        },
        author:{
            type:String,
            required:[true,"please add author name"]
        },
        report:{
            type:String,
            required:[true,"please add report status"]
        }
      },
)

const AdminResources=mongoose.model("AdminResources",resources);
module.exports=AdminResources;
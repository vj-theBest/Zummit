const mongoose=require("mongoose");

const dashboardReview=mongoose.Schema(
    {
        image:{
            type:String,
            required:[true,"please add image"]
        },
        title:{
            type:String,
            required:[true,"please add title"]
        },
        review:{
            type:String,
            required:[true,"please add your review"]
        },
        author:{
            type:String,
            required:[true,"please add author name"]
        },
        report:{
            type:String,
            required:[true,"please add status"]
        }
      },
)

const DashboardReview=mongoose.model("DashboardReview",dashboardReview);
module.exports=DashboardReview;
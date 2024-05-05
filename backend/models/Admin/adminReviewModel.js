const mongoose=require("mongoose");

const review=mongoose.Schema(
    {
        doctorName:{
            type:String,
            required:[true,"please add Doctor Name"]
        },
        review:{
            type:String,
            required:[true,"please add review"]
        },
        comment:{
          description:{
            type:String,
            required:[true,"please a comment"]
          },
          date:{
            type:String,
            required:[true,"please ad review date"]
          }
        }
      },
)

const AdminReview=mongoose.model("AdminReview",review);
module.exports=AdminReview;
const mongoose=require("mongoose")
const {objectId}=mongoose.Schema;
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const adminSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please add a name"]
        },
        input:{
            type:String,
            required:[true,"please add a email/phone"],
            unique:true,
            trim:true,
        },
        role:{
            type:String,
            required:[true,"plase specify a role : Client or Admin"],
            default:"Admin",
        },

        password:{
            type:String,
            required:[true,"Please add apassword"],
            minLength:[6,"Password must be upto 6 characters"],
        },
       
    }
)

// adminSchema.pre("save",async function(next){
//     const bcrypt=require("bcryptjs")
//     if(!this.isModified("password")){
//         return next();
//     }
    
//     const hashed=await bcrypt.genSalt(10)
//     const hashPassword=await bcrypt.hash(this.password,hashed)
//     this.password=hashPassword
//     next();
// })

const AdminLoginRegister=mongoose.model('AdminLoginRegister',adminSchema);
module.exports=AdminLoginRegister;
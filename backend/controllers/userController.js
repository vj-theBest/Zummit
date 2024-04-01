const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//register user controller
const registerUser = asyncHandler(async (req, res) => {

  // control variable hai bhai
  let isValid = false;
  let msg = '';
  let email='';
  let phone='';

  const { name, input, password,role } = req.body;
  //validation
  if (!name || !input || !role || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("password must be upto 6 character");
  }

    //Email toh noi aa raha hey Dekho jara
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input)) {
        email=input;
        isValid = true;
        console.log(email)
        msg = 'Valid email address.';
    }

    // phone aaya toh kya karenghe
    const phoneRegex = /^\+?(\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/;
    if (phoneRegex.test(input)) {
        phone=input;
        isValid = true;
        console.log(phone)
        msg = 'Valid phone number.';
    }

    // If neither email nor phone, return error
    if (!isValid) {
        return res.status(400).json({ success: false, msg: 'Invalid email or phone number.' });
    }

  const User = require("../models/userModel");

  //check if user exists
  const userExists = await User.findOne({ input });
  if (userExists) {
    res.status(400);
    throw new Error("User already Registered");
  }

  //Create new User
  const user = await User.create({
    name,
    input,
    role,
    password,
  });

    //Generate Token for User
  if (user) {
    const { _id, input,role } = user;
    const token = generateToken(_id);
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
      // secure:true,  for deployment
      // sameSite:none
    });
    // send user data
        res.status(201).json({
      success: true,
      data: _id,
      name,
      input,
      role,
      token,
      message: "regisered successfully",
    });
  } else {
    res.status(400).json({error:"Invalid user Data"});
  }
});

//Login User
const loginUser = asyncHandler(async (req, res) => {
  const { input, password } = req.body;
  //request ko toh validate kardoo
  if (!input || !password) {
    res.status(400);
    throw new Error("please add email/phone & password");
  }

  //check if user Exists
  const user = await User.findOne({ input });
  //userexists, check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  if(!user){
    res.status(400)
    throw new Error("user doesnot exist")
  }

  //generate token for new user
  const token = generateToken(user._id);
  if (user && passwordIsCorrect) {
    const newUser=await User.findOne({input}).select("-password")
    res.cookie("token",token,{
        path:"/",
        httpOnly:true,
        expires: new Date(Date.now()+1000*86400),
        // secure:true,
        // sameSite:none,
    });
    //send user data
    res.status(201).json(newUser)
  }else{
    res.status(400);
    throw new Error("Invalid email or Password");
  }
});

//logout user
const logOut=asyncHandler(async(req,res)=>{
    res.cookie("token"," ",{
        path:"/",
        httpOnly:true,
        expires:new Date(0),
        // secure:true,
        // sameSite:none,
    });
    return res.status(200).json({
        message:"successfully logout"
    })
})

module.exports = {
  registerUser,
  loginUser,
  logOut,

};

const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/userModel");

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
  // if (!name || !input || !role || !password) {
  //   res.status(400);
  //   throw new Error("Please fill in all required fields");
  // }
  console.log( name, input, password,role);
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

  const User = require("../../models/userModel");

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
    console.log("ID is ",_id)
    const token = generateToken(_id);
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400),
        //  secure:true,  //for deployment
        //  sameSite:none
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
const loginUser = async (req, res) => {
  try{
    
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
    throw new Error("user does not exist")
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
    res.status(201).json({newUser,"Authorization":token})
  }else{
    res.status(400);
    throw new Error("Invalid email or Password");
  }
  }
  catch(error){
    console.log(error);
  }
  
};

//logout user
const logout=asyncHandler(async(req,res)=>{

    /*res.cookie("token"," ",{
        path:"/",
        httpOnly:true,
        expires:new Date(0),
        //secure:true,
        //sameSite:none,
    });*/
    res.clearCookie('token');
    res.status(200).json({
        message:"successfully logout"
    })
})

const getUser=(req,res)=>{
    if(token){
      const user=User.findBy(body.input);
      res.status(200).json({
        success:true,
        data:user,
        msg:"user found"
      })
    }
}

const AdminDashboardData=(req,res)=>{
  if(token){
    const doctorList=[
      {
        therapists:"Dr.Jordan Patel",
        date:"02/08/2023"
      },
      {
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },
      {
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },
      {
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },
      {
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },
      {
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },
      {
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },{
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },
      {
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },{
        therapists:"Dr.Jasmine Joshi",
        date:"02/08/2023"
      },
    ];

    const addedReview=[
      {
        image:" ",
        title:"The Power of Therapy in Today's Stressful World",
        review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
        author:"Andy Fold",
        report:"Pending"
      },
      {
        image:" ",
        title:"The Power of Therapy in Today's Stressful World",
        review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
        author:"Andy Fold",
        report:"Published"
      },
      {
        image:" ",
        title:"The Power of Therapy in Today's Stressful World",
        review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
        author:"Andy Fold",
        report:"Published"
      },
      {
        image:" ",
        title:"The Power of Therapy in Today's Stressful World",
        review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
        author:"Andy Fold",
        report:"Published"
      }
    ];

    res.status(200).json({
      success:true,
      list:doctorList,
      review:addedReview,
      message:"data found"
    })
  }
}

const AdminAppointmentData=(req,res)=>{
  const appointmentsList=[
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Completed",
      reason:"NA"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Completed",
      reason:"NA"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Completed",
      reason:"NA"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" -1000`,
      report: "Cancelled",
      reason:"Emergency Call"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Cancelled",
      reason:"Emergency Call"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Upcoming",
      reason:"-"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Upcoming",
      reason:"-"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Completed",
      reason:"NA"
    },
    {
      clientName:"Ragini Verma",
      appointmentTime:{
        date:"02/08/2023",
        time:"11:00 AM- 11:30 AM"
      },
      therapyType:"Support group Anxiety",
      amount:`"\u20B9" 1000`,
      report: "Completed",
      reason:"NA"
    }
  ];

  res.status(200).json({
    success:true,
    appointments:appointmentsList,
    message:"data found"
  })

}

const AdminTherapistsDetails=(req,res)=>{
  const therapistsDetails=[
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    },
    {
      doctorName:"Dr.Jordan Patel",
      appointments:10,
      reviews:4,
      joiningDate:"02/08/2023"
    }
  ];
  res.status(200).json({
    success: true,
    data: therapistsDetails,
    message:"data found"
  })
}

const AdminGroups=(req,res)=>{
  const groupsDetails=[
    {
      image:"",
      email:"zummit-chandan@gmail.com",
      groupName:"Better Than Tomorrow",
      purpose_Goals:"Improving every minute",
      sessionNumber:10,
      slots:10,
      startDate:"",
      price:"",
      time:{
        shift:"",
        hours:""
      },
      selectDay:""
    },
    {
      image:"",
      email:"zummit-chandan@gmail.com",
      groupName:"Better Than Tomorrow",
      purpose_Goals:"Improving every minute",
      sessionNumber:10,
      slots:10,
      startDate:"",
      price:"",
      time:{
        shift:"",
        hours:""
      },
      selectDay:""
    },
    {
      image:"",
      email:"zummit-chandan@gmail.com",
      groupName:"Better Than Tomorrow",
      purpose_Goals:"Improving every minute",
      sessionNumber:10,
      slots:10,
      startDate:"",
      price:"",
      time:{
        shift:"",
        hours:""
      },
      selectDay:""
    },
    {
      image:"",
      email:"zummit-chandan@gmail.com",
      groupName:"Better Than Tomorrow",
      purpose_Goals:"Improving every minute",
      sessionNumber:10,
      slots:10,
      startDate:"",
      price:"",
      time:{
        shift:"",
        hours:""
      },
      selectDay:""
    },
    {
      image:"",
      email:"zummit-chandan@gmail.com",
      groupName:"Better Than Tomorrow",
      purpose_Goals:"Improving every minute",
      sessionNumber:10,
      slots:10,
      startDate:"",
      price:"",
      time:{
        shift:"",
        hours:""
      },
      selectDay:""
    }
  ];

  res.status(200).json({
    success:true,
    data:groupsDetails,
    message:"data found"
  })
}

const AdminClients=(req,res)=>{
  const clientList=[
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
    {
      clientId:"5364879",
      clientName:"Prabha Murthy",
      therapistName:"Sundhari Prakhash",
      lastSession:"02/08/2023"
    },
  ];

  res.status(200).json({
    success: true,
    data:clientList,
    message:"data found"
  })
}

const AdminResources=(req,res)=>{
  const resources=[
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Pending"
    },
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Published"
    },
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Published"
    },
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Published"
    },
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Published"
    },
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Published"
    },
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Published"
    },
    {
      image:" ",
      title:"The Power of Therapy in Today's Stressful World",
      review:"Discover how therapy is becoming a transformative tool for individuals navigating the complexities of modern life.",
      author:"Andy Fold",
      report:"Published"
    }
  ];
  res.status(200).json({
    success:true,
    data:resources,
    message:"data found"
  })
}

const AdminReviews=(req,res)=>{
  const reviews=[
    {
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },
    {
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },
    {
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },{
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },{
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },{
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },
    {
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },{
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    },
    {
      doctorName:"Dr.Jordan Patel",
      review:4,
      comment:{
        description:"Nec tortor quam turpis nunc nibh lorem quam dolor. Neque suspendisse tincidunt id arcu mollis praesent",
        date:"02/08/2023"
      }
    }
  ];

  res.status(200).json({
    success:true,
    data:reviews,
    message:"data found"
  })
}

const AdminTransactions=(req,res)=>{
  const transactions=[
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" -1000`,
      report:"Cancelled"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" -1000`,
      report:"Cancelled"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" -1000`,
      report:"Cancelled"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    },
    {
      invoiceNumber:635847693584,
      clientId:"000461884",
      clientName:"Rohan",
      doctorName:"Vijay Kapoor",
      amount:`"\u20A8" 1000`,
      report:"Completed"
    }
  ];

  res.status(200).json({
    success:true,
    data:transactions,
    message:"data found"
  })
}

const AdminProfile=(req,res)=>{
  const profile={
    name:"Ragini Meyer",
    email:"ragini.meyer@gmail.com",
    phone:"09874656123",
    dateofBirth:"5 May 2024"
  };
  res.status(200).json({
    success:true,
    data:profile,
    message:"data found"
  })
}

module.exports = {
  registerUser,
  loginUser,
  logout,
  getUser,
  AdminDashboardData,
  AdminAppointmentData,
  AdminTherapistsDetails,
  AdminClients,
  AdminGroups,
  AdminResources,
  AdminReviews,
  AdminTransactions,
  AdminProfile
};

import React, { useEffect, useRef, useState } from "react";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



 //main component toh yaha hey
const Register__Login = () => {
  const dispatch=useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [role, setRole] = useState("Client");
  const [name, setName] = useState('');
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  //register ka API Call Handler
  const registerUser = async (userData) => {
   
    try {
       const response = await fetch('https://zummit-chandan.onrender.com/api/users/register', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           "Access-Control-Allow-Origin": "https://zummit-chandan.onrender.com",
         },
         body: JSON.stringify(userData),
       });
   
       if (!response.ok) {
         throw new Error('Registration failed');
       }
   
       const data = await response.json();
       
       //jaao token leke aao
       const token = response.headers.get('Authorization');
          if (!token) {
            throw new Error('Token not found in response headers');
           }

       dispatch(addUser(data))
     navigate("/booking")
       console.log(data);

      //reload kee baad bhi data remain constant
      localStorage.setItem('token', data.token);
     
       
    } catch (error) {
       console.error('Error:', error);
       
    }
   };
   
   //Login ka API Call Handler
   const loginUser = async (loginData) => {
   
    try {
       const response = await fetch('https://zummit-chandan.onrender.com/api/users/login', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           "Access-Control-Allow-Origin": "https://zummit-chandan.onrender.com",
         },
         body: JSON.stringify(loginData),
       });
   
       if (!response.ok) {
         throw new Error('Login failed');
       }

   
       const data = await response.json();
       
       //jaao token leke aao
       const token = response.headers.get('Authorization');
          if (!token) {
            throw new Error('Token not found in response headers');
           }

       dispatch(addUser(data))
     navigate("/booking")
       console.log(data);
      
       //reload kee baad bhi data remain constant
      localStorage.setItem('token', data.token);
      
      

    } catch (error) {
       console.error('Error:', error);
      
    }
   };

   //token check karo reload kee baad
   const checkForToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
       // Dispatch an action to set the user state with the token
       dispatch(addUser({ token }));
    }
   };
   
   //re-render kee baad call karo
   useEffect(() => {
    checkForToken();
   }, []);
 
  const handleClick = () => {
    setSignUp(!signUp);
  };

  const handleClient = () => {
    setRole("Client");
    console.log("Client");
  };

  const handleTherapist = () => {
    setRole("Therapist");
    console.log("Thearipist");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
 };

 const handleInputChange = (e) => {
    setInput(e.target.value);
 };

 const handlePasswordChange = (e) => {
    setPassword(e.target.value);
 };

 
 const handleSubmit = (e) => {
  e.preventDefault();
  const userData = {
    name,
    input,
    password,
    role,
  };

  if (!signUp) {
    registerUser(userData);
  } else {
    const loginData = {
      input,
      password,
    };
    loginUser(loginData);
  }

  //cleanup toh karo ree
  setName('');
  setInput('');
  setPassword('');
  setRole('Client');
};


  return (
    <form onSubmit={handleSubmit} className="flex justify-center mx-28 ml-48 my-16 items-center w-full">
      {/* Left Container */}
      <div className="w-[50%]">
        <div className="w-[50%] flex flex-col gap-5 shadow-lg rounded-lg bg-white p-5">
          <p className="text-center text-2xl font-medium">
            {signUp ? "Login" : "Register"}
          </p>
          <div className="flex justify-around gap-10 cursor-pointer">
            <p
              onClick={handleClient}
              className={role === "Client" ? "active" : "inactive"}
            >
              Client
            </p>
            <p
              onClick={handleTherapist}
              className={role === "Therapist" ? "active" : "inactive"}
            >
              Therapist
            </p>
          </div>
          {!signUp && (
            <input
              className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Full Name"
            />
          )}
         { <input
            className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Email or Phone Number"
          />}
        {<input
            className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />}
          {!signUp && (
            <input
              className="bg-cyan-100  p-2 w-[100%]  outline-none rounded-lg"
              type="text"
              placeholder="Re-Enter Passowrd"
            />
          )}
          <button type="submit" className="w-[40%] rounded-lg bg-yellow p-2 text-green-500 text-base">
            {signUp ? "Login" : "Register"}
          </button>
          <p onClick={handleClick} className="text-cyan-500 cursor-pointer">
            {signUp
              ? "New here ?,Register Now"
              : "Already Registered ? Login Now"}
          </p>
        </div>
      </div>
      {/* Right Container */}
      <div className="w-[50%]">
        <div className="bg-cyan-600 rounded-lg w-[306px]  flex items-center">
          <img
            src={require(`./images/aroundwithin-speed.gif`)}
            alt=""
            className="w-full rounded-md"
          />
        </div>
      </div>
    </form>
  );
};

export default Register__Login;

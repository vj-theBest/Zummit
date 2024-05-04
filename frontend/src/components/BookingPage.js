import * as React from "react";
import { Link } from 'react-router-dom';
import Therapists from "./Therapists";
import Side_Navbar from "./Side_Navbar";
function BookingPage() {
    return (<>
    <div className="flex">
        <Side_Navbar />
        <Therapists />
    </div>
       
    </>)
}







export default BookingPage


// {/* // import React from 'react'

// // const BookingPage = () => {
// //   return (
// //     <div className='h-[80vh] justify-center items-center text-5xl font-bold' >
// //       <h3>This will be a booking Page </h3>
// //       <h3>Releasing Soon ........</h3>
      
// //     </div>
// //   )
// // }

// // export default BookingPage */}
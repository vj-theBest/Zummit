import React from "react";
import Admin_SideBar from "../Admin_SideBar";
import Appointment from "./Appointment";

const Admin_Appointments = () => {
  return (
    <div className="flex bg-[#F2FCFF]">
      <Admin_SideBar/>
      <Appointment/>
    </div>
  );
};

export default Admin_Appointments;

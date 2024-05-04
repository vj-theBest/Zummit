import React from "react";
import { Link, useLocation } from "react-router-dom";
const Admin_SideBar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const navigationItems = [
    { path: '/admindashboard', label: 'Dashboard' },
    { path: '/admin_appointments', label: 'Appointments' },
    { path: '/admin_therapists', label: 'Therapists' },
    { path: '/admin_groups', label: 'Groups' },
    { path: '/admin_billings', label: 'Billings' },
    { path: '/admin-resources', label: 'Resources' },
    { path: '/FAQs', label: 'FAQ' },
    { path: '/admin_profile', label: 'Profile' },
    { path: '/logout', label: 'Logout' },
 ];
  return (
    <div className="leftCont flex ">
      <div className="sidebar w-[18vw] bg-[#00677F]">
        <Link to="/admindashboard">
          <img
            src={require("../images/logo.png")}
            alt=""
            className="pl-[16px] pt-[32px] w-[196px]"
          />
        </Link>
        <div className="h-[697px] w-[227px] m-auto flex flex-col items-start text-white text-[22px] justify-evenly">
          {navigationItems.map((data) => (
            <button
              className={` pl-4  ${
                isActive(data.path)
                  ? "bg-[#FDFEF1] pl-4 text-black font-bold w-[227px] h-[49px] rounded-lg text-left"
                  : ""
              }`}
            >
              <Link to={data.path}>{data.label}</Link>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin_SideBar;

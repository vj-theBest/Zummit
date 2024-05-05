import React from 'react'
import Admin_SideBar from "../Admin_SideBar";
import Client from './Client';
const Admin_Clients = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
    <Admin_SideBar/>
    <Client/>
  </div>
  )
}

export default Admin_Clients
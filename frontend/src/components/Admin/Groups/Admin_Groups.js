import React from 'react'
import Admin_SideBar from "../Admin_SideBar";
import Groups from './Groups';
const Admin_Groups = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Admin_SideBar/>
      <Groups/>
    </div>
  )
}

export default Admin_Groups
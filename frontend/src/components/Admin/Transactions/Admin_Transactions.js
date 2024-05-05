import React from 'react'
import Admin_SideBar from "../Admin_SideBar";
import Transactions from './Transactions';

const Admin_Transactions = () => {
  return (
    <div className='flex bg-[#F2FCFF]'>
      <Admin_SideBar/>
      <Transactions/>
    </div>
  )
}

export default Admin_Transactions
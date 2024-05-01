import React from 'react'
import TherapistProfileCard from './therapistProfileCard'

const TherapistProfile = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[80%]"> 
        <h1 className="text-[26px] font-medium text-[#001519] mt-[32px] mb-[32px]">Therapists/Dr. Sundhari Prakashan</h1>
        <TherapistProfileCard />
      </div>
    </div>
  )
}

export default TherapistProfile
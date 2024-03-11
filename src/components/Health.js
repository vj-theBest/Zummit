import React from 'react'

const Health = () => {
  return (
    <div className='bg-skyblue flex flex-col  py-10 gap-5 justify-center items-center '>
        <h1 className='text-3xl '>Resourses for Better health from Aroundwithin team</h1>
        <p className='text-gray-500'>"Deep breathing is our nervous system's love language."- Dr.Laurem Fogel Mersy</p>
        <div className='flex justify-center  gap-5'>
        <div className='bg-white w-[25%] h-[45vh] p-4 rounded-lg flex flex-col justify-center gap-2 '>
            <img className='w-[100%] h-[100%] rounded-lg' src={require('./images/Health-1.webp')} alt="" />
            <p className='text-xs text-gray-500'>Article| 5min</p>
            <p className='text-sm'>Meditation helps you to clam your mind</p>
        </div>
        <div className='bg-white w-[25%] h-[45vh] p-4 rounded-lg flex flex-col justify-center gap-2 '>
            <img className='w-[100%] h-[100%] rounded-lg' src={require('./images/health-2.webp')} alt="" />
            <p className='text-xs text-gray-500'>Article| 5min</p>
            <p className='text-sm'>Reach your fitness goal by following</p>
        </div>
        <div className='bg-white w-[25%]  h-[45vh] p-4 rounded-lg flex flex-col justify-center gap-2 '>
            <img className='w-[100%] h-[100%] rounded-lg' src={require('./images/health-3.webp')} alt="" />
            <p className='text-xs text-gray-500'>Article| 5min</p>
            <p className='text-sm'>Some breathing techniques which helps</p>
        </div>
        </div>
        <h1>See all </h1>
    </div>
  )
}

export default Health
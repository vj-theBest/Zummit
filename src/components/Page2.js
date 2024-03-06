import React from 'react'

function Page2() {
  return (
    <div className='flex p-12 pb-16'>
      <div className='w-1/2 relative'>
        <div className='flex flex-col'>
            <div className='ps-10 font-semibold text-xl'>WHO WE ARE</div>
            <div className='flex'><img className='object-cover mt-8 me-40 w-[50vw] h-[35vh]' src={require('./images/img.jpg')}></img></div>
        </div> </div>
        <div className='w-1/2'>
            <div className='mt-6 font-extralight text-cyan-800 text-2xl'>Our Story</div>
            <div className='m-16 ms-0 text-xl font-extralight'>An online therapy for mental health resource to empower,educate 
                and transform with both group & individual therapy's</div>
                <div className='float-end me-20 text-md pb-7 text-cyan-800 font-bold'><a href='#' >Know more</a></div>
        </div>
      </div>
   
  )
}

export default Page2

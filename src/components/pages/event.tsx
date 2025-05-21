import Image from 'next/image'
import React from 'react'

function Evenet() {
  return (
    <div className='p-4 z-10 relative h-full flex flex-col items-center justify-center w-full text-[#B83143]'>
      <div className="relative w-42 h-24" data-aos="fade-in">
        <Image src="/assets/savedate.png" fill alt='save the date' />
      </div>
      <div className="flex mt-10 gap-5" data-aos="fade-up">
        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-2xl font-bold text-xl bg-[#fcc4ce] text-[#B83143]">
          07
        </div>
        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-2xl font-bold text-xl bg-[#fcc4ce] text-[#B83143]">
          07
        </div>
        <div className="w-[80px] h-[80px] flex justify-center items-center rounded-2xl font-bold text-xl bg-[#fcc4ce] text-[#B83143]">
          07
        </div>
      </div>

      <div data-aos="fade-up text-center">

        <h1 className="mt-2 font-bold">SATURDAY FROM 5PM-7PM</h1>

        <h2 className='font-bold underline mt-2'>Venue:</h2>
        <p className='font-bold text-xl'>Grand i Hotel Nagoya Garden</p>
        <p className='text-center mt-5'>
          Jalan Teuku Umar,
          <br />
          Bukit Nagoya, Batam – Indonesia
        </p>
      </div>

    </div>
  )
}

export default Evenet
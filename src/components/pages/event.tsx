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

        <h1 className="mt-2 font-bold text-center">SATURDAY FROM 5PM-7PM</h1>

        <h2 className='font-bold underline mt-2 text-center'>Venue:</h2>
        <p className='font-bold text-xl text-center'>Grand i Hotel Nagoya Garden</p>
        <p className='text-center mt-5'>
          Jalan Teuku Umar,
          <br />
          Bukit Nagoya, Batam – Indonesia
        </p>
        <div style={{ width: '100%', height: '150px', overflow: 'hidden' }} className='rounded-lg shadow mt-10'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9163009537147!2d110.36261501046177!3d-7.798686092189013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a573d72fa9355%3A0x5c1c527ea0a09e7e!2sMalioboro%20Yogyakarta!5e0!3m2!1sid!2sid!4v1748824937602!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  )
}

export default Evenet
import React from 'react'

function Rsvp() {
  return (
    <div className='z-10  relative h-full flex flex-col items-center justify-center w-full text-[#B83143] font-[" Brigesta"]'>
      <h1 className='font-bold text-[32px]' data-aos="fade-down">Count Down</h1>
      <div className="flex gap-1 my-5" data-aos="zoom-in">
        <div className="h-18 w-18 rounded bg-white border border-red-800 flex flex-col justify-center items-center">
          <h4 className='font-bold text-[24px]'>00</h4>
          <p>Hari</p>
        </div>
        <div className="h-18 w-18 rounded bg-white border border-red-800 flex flex-col justify-center items-center">
          <h4 className='font-bold text-[24px]'>00</h4>
          <p>Jam</p>
        </div>
        <div className="h-18 w-18 rounded bg-white border border-red-800 flex flex-col justify-center items-center">
          <h4 className='font-bold text-[24px]'>00</h4>
          <p>Menit</p>
        </div>
        <div className="h-18 w-18 rounded bg-white border border-red-800 flex flex-col justify-center items-center">
          <h4 className='font-bold text-[24px]'>00</h4>
          <p>Detik</p>
        </div>
      </div>
        <p className='text-center' data-aos="fade-up">
          Send greetings to the bride and groom
          <br />
          and confirm attendance
        </p>

        <button className='bg-[#B83143] py-3 px-10 rounded-full mt-5 text-2xl text-white hover:scale-95 cursor-pointer' data-aos="fade-up">
          Kirim Ucapan RSVP
        </button>
    </div>
  )
}

export default Rsvp
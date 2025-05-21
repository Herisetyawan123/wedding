import Image from 'next/image'
import React from 'react'

function Greeting() {
  return (
    <div className='p-4 z-10 relative h-full flex flex-col items-center justify-center w-full  text-[#B83143] font-[" Brigesta"] text-center' data-aos="fade-in">
      <p>
        By the wonderful Grace of God,
        <br />
        we are delighted to invite you to the
        <br />
        Wedding of
      </p>
      <h1 className='font-bold text-2xl mt-5'>
        Polli & Ully
      </h1>

      <div className="mt-10 relative w-[50%] h-40" data-aos="fade-up">
        <Image src={'/assets/wedding.webp'} alt='plli and ully' fill />
      </div>
    </div>
  )
}

export default Greeting
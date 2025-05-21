import React from 'react'
import Image from 'next/image'

export default function Opening({ handleOpen }: { handleOpen: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
      <div className='bg-[#fdf8f0] w-[60%] border-4 border-[#BC9C6A] h-80 mb-5 rounded-full relative flex'>
        <div className="w-[60%] relative h-[60%] m-auto">
          <Image
            src="/assets/wedding.webp"
            alt="couple logo"
            fill

          />
        </div>
      </div>
      <h3 className='text-center text-xs text-[#B83143]'>
        Kepada Yth;
        <br />
        Bapak/Ibu/Saudara/i
      </h3>
      <h1 className="text-sm font-bold mb-4 text-[#B83143] mt-2">Nama tamu</h1>
      <button
        onClick={handleOpen}
        className="mt-5 px-6 py-2 bg-[#B83143] text-white rounded-full shadow-md hover:bg-[#8a1b2a] transition cursor-pointer text-xs"
      >
        Open Invitation
      </button>
    </div>
  )
}

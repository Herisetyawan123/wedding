import React from 'react'
import Image from 'next/image';
function WrapperContent({ page }: { page: number }) {
  if (page == 0) {

    return (
      <div className="flex flex-col items-center justify-center w-full h-[80%]">
        {/* Logo */}
        <div className="relative z-10 mt-10 mb-6">
          <div className="border-2 border-[#c7ab77]  h-[380px] w-[250px] rounded-full p-8 relative bg-[#fdf7f0]">
            <Image src="/assets/wedding.webp" alt="logo" className="relative w-[100%] object-contain" layout="fill" />
          </div>
        </div>

        {/* Teks Undangan */}
        <div className="relative z-10 text-[#7d2d2d] mt-4 text-center">
          <p className="text-sm">Kepada Yth;</p>
          <p className="text-sm mb-1">Bapak/Ibu/Saudara/i</p>
          <p className="font-semibold text-md">Nama Tamu</p>
        </div>
      </div>
    );
  }

  if (page == 1) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[80%] text-[#B83143] z-20">
        <div className="z-10 text-center">
          <p>The Wedding of</p>
          <span className='font-bold text-2xl'>
            Kelvin &amp; Della
          </span>
        </div>

        {/* foto */}
        <div className="w-[80%] relative h-[120px] mt-10">
          <Image
            src="/assets/couple.jpg"
            alt="kelvin"
            layout='fill'
            className="rounded object-cover w-full relative"
          />
        </div>
        <div className="w-[80%] relative h-[120px] mt-2">
          <Image
            src="/assets/couple.jpg"
            alt="kelvin"
            layout='fill'
            className="rounded object-cover w-full relative"
          />
        </div>
        <div className="z-10 bottom-0 w-[400px] relative flex flex-col items-center justify-center h-[80%]">
          <Image
            src="/assets/save-the-date.webp"
            alt='save the date'
            // layout='fill'
            width={280}
            height={380}
            className="object-cover w-full relative"
          />
        </div>
      </div>
    );
  }

  return (
    <div>WrapperContent</div>
  )
}

export default WrapperContent
import React from 'react'
import Image from "next/image";
import SaveTheDateImage from "@/assets/save-the-date.png";

function SaveTheDate() {
  return (
    <div className="p-4 z-10  relative h-full flex flex-col items-center w-full" data-aos="zoom-in">
      <div className="h-28 w-28 rounded-full relative">
        <Image src={'/assets/logo.png'} alt="logo" fill className="w-full h-full object-contain" />
      </div>
      <div className="text-[#B83143] mt-5 text-center space-y-2">
        <p>The wedding of</p>
        <h1 className="font-bold text-2xl">POLLY & ULLY</h1>
      </div>
      <div className="flex flex-col w-full items-center mt-2 space-y-3 relative">
        <div className="w-[75%] h-28 bg-amber-300 rounded-md">

        </div>
        <div className="w-[75%] h-28 bg-amber-300 rounded-md">

        </div>

        <div className="relative w-[75%] h-28 bottom-14">
          <Image src={SaveTheDateImage} fill alt="save the date" className="w-full h-full" />
        </div>
      </div>

    </div>
  )
}

export default SaveTheDate
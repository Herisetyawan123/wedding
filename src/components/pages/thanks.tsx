'use client'

import React from 'react'
import CoupleBg from "@/assets/couple-bg.jpg"
import Image from "next/image"

function Thanks() {
  return (
    <div className={`p-4 z-10 relative h-full flex flex-col items-center justify-start w-full font-[" Brigesta"] text-[#fef4ea]`} style={{
      backgroundImage: `linear-gradient(to bottom, rgba(254, 244, 234, 0.5), rgba(0, 0, 0, 0)), url('${CoupleBg.src}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      
      <div className="relative w-full h-32">
        <Image
          src="/assets/thanks.png"
          alt="thanks"
          layout='fill'
          objectFit='contain'
        />
      </div>

      <div className="relative w-32 h-32 mt-10">
        <Image
          src="/assets/logo-text.png"
          alt="logo"
          layout='fill'
          objectFit='contain'
        />
      </div>

      {/* Tambahan QR Code Section */}
      <div className="mt-10 text-center">
        <p className="mb-2 text-lg">Kirim hadiah via QR Code</p>
        <div className="relative w-40 h-40 mx-auto">
          <Image
            src="/assets/qrcode.png" // pastikan file ini ada di public/assets/
            alt="QR Code Kirim Uang"
            layout='fill'
            objectFit='contain'
          />
        </div>
        <p className="mt-2 text-sm italic">Terima kasih atas doa dan restunya</p>
      </div>

    </div>
  )
}

export default Thanks

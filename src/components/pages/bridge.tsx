import React from 'react'

function Bridge() {
  return (
    <div className='p-4 z-10  relative h-full flex flex-col items-center justify-center w-full text-[#B83143] font-[" Brigesta"]'>
      <div className="absolute bg-gray-100 w-32 h-[60%] right-0 bottom-32 flex justify-center items-center" data-aos="fade-left">
        Wanita Image
      </div>
      <div className='mr-16 text-right' data-aos="fade-right">
        <span className='bg-[#B83143] rounded-full text-white px-3 py-1 text-sm font-semibold'>
          THE GROOM
        </span>
        <h1 className='font-bold text-3xl mt-10'>
          POLITICA
          <br /> LINEG
          <br />
        </h1>
        <h3 className='mt-2 font-semibold'>
          LILI ZHENG
        </h3>
        <h3 className='mt-2 font-semibold text-2xl'>
          李立正
        </h3>
        <div className="mt-5 font-italic">The son of<br />Mr. Lido Negara<br />Mrs. Vera Salim</div>
      </div>
    </div>
  )
}

export default Bridge
import React from 'react'

function GalleryThree() {
  return (
    <div className='p-4 z-10 relative h-full flex flex-col items-center justify-center w-full'>

      <div className='w-[80%] h-92 flex flex-col justify-between gap-3'>
        <div className='flex gap-3 flex-1'>
          <div data-aos="zoom-in" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
          <div data-aos="zoom-in" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
        </div>
        <div className='flex gap-3 flex-1'>
          <div data-aos="zoom-in" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
          <div data-aos="zoom-in" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
        </div>
        <div className='flex gap-3 flex-1'>
          <div data-aos="zoom-in" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
          <div data-aos="zoom-in" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
        </div>
      </div>
    </div>
  )
}

export default GalleryThree
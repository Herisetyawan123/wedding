import React from 'react'

function GalleryTwo() {
  return (
    <div className='p-4 z-10 relative h-full flex flex-col items-center justify-center w-full'>

      <div className='w-[80%] h-92 flex flex-col justify-between'>
        <div className='flex gap-3 h-[100%] flex-col'>
          <div data-aos="fade-left" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
          <div data-aos="fade-right" className="flex-1 bg-gray-200 rounded-2xl h-ful"></div>
        </div>
      </div>
    </div>
  )
}

export default GalleryTwo
import React from 'react'

function DressCode() {
  return (
    <div className='z-10  relative h-full flex flex-col items-center justify-center w-full text-[#B83143] font-[" Brigesta"]'>
      <div className=" w-[100%] h-92 flex justify-center" style={{
        backgroundImage: `url('assets/papper.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} data-aos="zoom-in">
        <div className="w-[80%] flex flex-col justify-center items-center text-center gap-2">
          <h3 className='text-2xl text-center'>
            To enjoy an evening fine dining, we respectfully ask that you be on time.
          </h3>
          <div>
            <p className='text-center text-[14px]'>
              The dresscode for the event is
            </p>
            <span className='font-bold text-[14px]'>
              formal attire / evening dress <br />with no dark color.
            </span>
          </div>
            <div className='w-[80%] text-[14px]'>
              We have no doubt that the heavenly charm of your presence will intensify the joy of the celebration
            </div>
        </div>
      </div>
    </div>
  )
}

export default DressCode
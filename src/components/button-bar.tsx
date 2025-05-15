import React from 'react'

export default function ButtonBar({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick?: () => void; }) {
  return (
    <div onClick={onClick} className={`w-[100%] max-w-[82px] ${active ? 'bg-[#B83143] hover:bg-[#B83143]/80 text-white' : 'bg-white text-[#B83143]'} rounded-xl h-full flex flex-none after:absolute relative items-center justify-center font-semibold text-sm cursor-pointer  transition-all duration-300 ease-in-out`}>
      {children}
    </div>
  )
}

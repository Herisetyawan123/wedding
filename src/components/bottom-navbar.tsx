'use client'

import { Dispatch, SetStateAction, useRef, useEffect, useCallback } from 'react'
import { BiHeart, BiHome } from 'react-icons/bi';
import { BsQuote } from 'react-icons/bs';
import { FaRegCalendar } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { GrGallery } from 'react-icons/gr';
import { HiMiniChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';
import { LuPartyPopper } from 'react-icons/lu';
import { MdEvent } from 'react-icons/md';
import { PiDress } from 'react-icons/pi';
import { motion } from 'framer-motion'

const menus = [
  'Opening', 'Save', 'Quotes', 'Gallery', 'Greeting', 'Groom', 'Bridge', 'Gallery', 'Gallery', 'Event'
]

const icons = [
  <BiHome key={1} size={24} />,
  <FaRegCalendar key={2} size={24} />,
  <BsQuote key={3} size={24} />,
  <GrGallery key={4} size={24} />,
  <FiSettings key={5} size={24} />,
  <BiHeart key={6} size={24} />,
  <BiHeart key={7} size={24} />,
  <GrGallery key={8} size={24} />,
  <GrGallery key={9} size={24} />,
  <MdEvent key={10} size={24} />,
  <PiDress key={10} size={24} />,
  <HiMiniChatBubbleOvalLeftEllipsis key={10} size={24} />,
  <LuPartyPopper key={10} size={24} />,
];

export default function BottomNavbar({ activeIndex, setActiveIndex }: { activeIndex: number, setActiveIndex: Dispatch<SetStateAction<number>> }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)

  const handleClick = useCallback((index: number) => {
    // console.error(index)
    setActiveIndex(index)

    const container = containerRef.current
    if (container) {
      const menuItem = container.children[index] as HTMLElement
      const containerWidth = container.offsetWidth
      const scrollTo = menuItem.offsetLeft - containerWidth / 2 + menuItem.offsetWidth / 2

      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      })
    }
  }, [setActiveIndex]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY.current = e.changedTouches[0].clientY
      handleGesture()
    }

    const handleGesture = () => {
      if (touchStartY.current - touchEndY.current > 50) {
        console.log("object")
        if (activeIndex < menus.length - 1)
          handleClick(activeIndex + 1)
      } else if (touchStartY.current - touchEndY.current < -50) {
        console.log("object")
        if (activeIndex >= 0)
          handleClick(activeIndex - 1)
      }
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [activeIndex, handleClick])

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-20">
      <div className="bg-white shadow-md w-full max-w-[400px] overflow-hidden p-1">
        <div
          className="flex overflow-x-hidden relative gap-1"
          ref={containerRef}
        >
          {menus.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleClick(index)}
              initial={false}
              animate={{
                scale: activeIndex === index ? 1 : 0.95,
                opacity: activeIndex === index ? 1 : 0.7,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`flex-none shrink-0 w-[80px] cursor-pointer py-3 rounded text-xs text-center transition-all flex justify-center items-center flex-col gap-2 ${activeIndex === index ? 'text-white bg-[#B83143] font-bold duration-1000 transition-all' : 'text-[#B83143]'
                }`}
            >
              {
                icons[index]
              }
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

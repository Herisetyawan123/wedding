/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Opening from "@/components/opening";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import { FaQrcode } from "react-icons/fa";
import { MdOutlineMusicNote, MdOutlineMusicOff } from "react-icons/md";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
import BottomNavbar from "@/components/bottom-navbar";
import { BsWhatsapp } from "react-icons/bs";
import SaveTheDate from "@/components/pages/save-the-date";
import Quotes from "@/components/pages/quotes";
import GalleryOne from "@/components/pages/gallery";
import Greeting from "@/components/pages/greeting";
import Groom from "@/components/pages/groom";
import Bridge from "@/components/pages/bridge";
import GalleryTwo from "@/components/pages/gallery-two";
import GalleryThree from "@/components/pages/gallery-three";
import Evenet from "@/components/pages/event";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isOpened, setIsOpened] = useState(false)
  const [mute, setMute] = useState(false)
  const [play, setPlay] = useState(true)
  const [page, setPage] = useState(<SaveTheDate />)

  useEffect(() => {
    if (activeIndex == 0) {
      setPage(<Opening handleOpen={handleOpen} />)
    } else if (activeIndex == 1) {
      setPage(<SaveTheDate />)
    } else if (activeIndex == 2) {
      setPage(<Quotes />)
    } else if (activeIndex == 3) {
      setPage(<GalleryOne />)
    } else if (activeIndex == 4) {
      setPage(<Greeting />)
    } else if (activeIndex == 5) {
      setPage(<Groom />)
    } else if (activeIndex == 6) {
      setPage(<Bridge />)
    } else if (activeIndex == 7) {
      setPage(<GalleryTwo />)
    } else if (activeIndex == 8) {
      setPage(<GalleryThree />)
    } else if (activeIndex == 9) {
      setPage(<Evenet />)
    }

  }, [activeIndex])

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true, // animasi hanya saat pertama scroll
    })
  }, [])

  const handleOpen = () => {
    const el = document.documentElement

    // Masuk ke fullscreen jika didukung
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if ((el as any).webkitRequestFullscreen) {
      (el as any).webkitRequestFullscreen()
    } else if ((el as any).msRequestFullscreen) {
      (el as any).msRequestFullscreen()
    }
    // Tampilkan konten utama
    setIsOpened(true)
  }



  return (
    <main className="relative w-full h-screen" style={
      {
        backgroundImage: "url('/assets/bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }
    }>

      {/* Konten utama setelah dibuka */}
      {isOpened && (
        <>
          {
            page
          }
          <BottomNavbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </>
      )}


      <div className="absolute w-10 bottom-24 right-5 space-y-3 text-white z-10">
        <div className="bg-[#b83143ac] w-10 h-10 rounded-full flex justify-center items-center">
          <BsWhatsapp size={24} />
        </div>
        <div className="bg-[#b83143ac] w-10 h-10 rounded-full flex justify-center items-center">
          <FaQrcode size={24} />
        </div>
        <div className="bg-[#b83143ac] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" onClick={() => { setMute(prev => !prev) }}>
          {
            mute ? (
              <MdOutlineMusicOff size={24} />
            ) : (
              <MdOutlineMusicNote size={24} />
            )
          }
        </div>
        <div className="bg-[#b83143ac] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" onClick={() => { setPlay(prev => !prev) }}>
          {
            play ? (
              <FaCirclePlay size={24} />
            ) : (
              <FaCirclePause size={24} />
            )
          }

        </div>
      </div>


      <div className="absolute -top-20 -right-20 w-96 h-96 z-0 pointer-events-none animate-floating">
        <Image
          src="/assets/flowers-1.webp"
          alt="Bunga Kanan"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Gambar bunga kiri bawah */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 z-0 pointer-events-none animate-floating">
        <Image
          src="/assets/flowers-2.webp"
          alt="Bunga Kiri"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Opening Section */}
      {!isOpened && (
        <Opening handleOpen={handleOpen} />
      )}


    </main>
  );
}

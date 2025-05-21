'use client'
import { useState } from "react";
import Cover from "@/components/cover";
import Image from "next/image";
// import ButtonBar from "@/components/button-bar";
import WrapperContent from "@/components/wrapper-content";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  // const [page, setPage] = useState(1);


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white overflow-hidden">
      {!showContent && <Cover onOpen={() => setShowContent(true)} />}

      {showContent && (
        <div className="sm:w-[400px] w-full relative h-screen mx-auto overflow-hidden" style={{
          backgroundImage: "url('/assets/bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}>

          {/* Background Bunga */}
          <Image
            src="/assets/flowers-1.webp"
            alt="flower"
            // layout="fill"
            width={476}
            height={363}
            className="absolute -top-10 animate-pulse duration-500 -right-20 object-cover"
          />
          <Image
            src="/assets/flowers-2.webp"
            alt="flower"
            // layout="fill"
            width={476}
            height={363}
            className="absolute -bottom-10 animate-pulse duration-500 -left-20 object-cover"
          />

          <WrapperContent page={0} />

          <div className="fixed bottom-0 w-full bg-white border-t z-50">
            <div className="max-w-[400px] mx-auto flex justify-between items-center px-4 py-2 text-center text-[#a52834]">

              <div className="flex flex-col items-center">
                <div className="bg-[#a52834] text-white p-3 rounded-2xl mb-1">

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V12H9v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9z" />
                  </svg>
                </div>
                <span className="text-xs">Opening</span>
              </div>


              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v18l7-5 7 5V3H5z" />
                </svg>
                <span className="text-xs">Save</span>
              </div>

              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5h6M9 9h6M5 15h14v4H5z" />
                </svg>
                <span className="text-xs">Quotes</span>
              </div>


              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18v14H3V5zm2 2v10h14V7H5zm6 2l2 3 3-4 4 6H5l6-5z" />
                </svg>
                <span className="text-xs">Gallery</span>
              </div>

              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V2m0 20v-2m4.24-4.24l1.42 1.42m-12.02 0l1.42-1.42M4 12H2m20 0h-2m-4.24-4.24l1.42-1.42m-12.02 0l1.42 1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
                <span className="text-xs">Greetings</span>
              </div>
            </div>
          </div>


          {/* <div className="bottom-navbar w-full sm:w-[400px] mx-auto  overflow-hidden ">
            <div className="h-full min-w-full p-1 flex items-center -translate-x-0">
              <ButtonBar onClick={() => setPage(0)} active={page == 0}>
                <span className="text-sm font-light">
                  Opening
                </span>
              </ButtonBar>
              <ButtonBar onClick={() => setPage(1)} active={page == 1}>
                <span className="text-sm font-light">
                  Save
                </span>
              </ButtonBar>
              <ButtonBar onClick={() => setPage(2)} active={page == 2}>
                <span className="text-sm font-light">
                  Quotes
                </span>
              </ButtonBar>
              <ButtonBar onClick={() => setPage(3)} active={page == 3}>
                <span className="text-sm font-light">
                  Gallery
                </span>
              </ButtonBar>
              <ButtonBar onClick={() => setPage(4)} active={page == 4}>
                <span className="text-sm font-light">
                  Greatings
                </span>
              </ButtonBar>
              <ButtonBar onClick={() => setPage(5)} active={page == 5}>
                <span className="text-sm font-light">
                  Opening
                </span>
              </ButtonBar>
              <ButtonBar onClick={() => setPage(6)} active={page == 6}>
                <span className="text-sm font-light">
                  Opening
                </span>
              </ButtonBar>

            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}

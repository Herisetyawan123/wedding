'use client'
import { useState } from "react";
import Cover from "@/components/cover";
import Image from "next/image";
import ButtonBar from "@/components/button-bar";
import WrapperContent from "@/components/wrapper-content";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [page, setPage] = useState(1);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      {!showContent && <Cover onOpen={() => setShowContent(true)} />}

      {showContent && (
        <div className="w-[400px] relative h-screen mx-auto overflow-hidden" style={{
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

          <WrapperContent page={page} />

          <div className="absolute bottom-10 w-[95%] h-[80px] -translate-x-[50%] left-[50%] rounded bg-white/90 overflow-hidden ">
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
          </div>
        </div>
      )}
    </div>
  );
}

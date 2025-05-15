import { useState } from "react";
import Image from "next/image";


interface CoverProps {
  onOpen?: () => void;
}

export default function Cover({ onOpen }: CoverProps) {
  const [visible, setVisible] = useState(true);

  const handleOpen = () => {
    setVisible(false);
    if (onOpen) onOpen();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000">
      <div className="w-[400px] h-screen shadow-xl relative overflow-hidden rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center" style={{
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

        {/* Logo */}
        <div className="relative z-10 mt-10 mb-6">
          <div className="border-2 border-[#c7ab77]  h-[380px] w-[250px] rounded-full p-8 relative bg-[#fdf7f0]">
            <Image src="/assets/wedding.webp" alt="logo" className="relative w-[100%] object-contain" layout="fill" />
          </div>
        </div>

        {/* Teks Undangan */}
        <div className="relative z-10 text-[#7d2d2d] mt-4">
          <p className="text-sm">Kepada Yth;</p>
          <p className="text-sm mb-1">Bapak/Ibu/Saudara/i</p>
          <p className="font-semibold text-md">Nama Tamu</p>
        </div>

        {/* Tombol Open */}
        <button
          onClick={handleOpen}
          className="relative z-10 mt-6 px-4 py-2 bg-[#7d2d2d] text-white rounded-full text-sm shadow-lg hover:scale-105 transition-transform"
        >
          Open Invitation
        </button>
      </div>
    </div>
  );
}

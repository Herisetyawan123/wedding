import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        {children}
      </body> */}
      <body className={`bg-gray-100 ${geistSans.variable} ${geistMono.variable}`}>
        <div className="min-h-screen w-full flex justify-center items-start">
          <div className="relative w-full max-w-[400px] bg-white min-h-screen overflow-hidden">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

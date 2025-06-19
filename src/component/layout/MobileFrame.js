'use client';

import Image from "next/image";
import bgHouse from "@/../public/0.start/bg-house.png";

export default function MobileFramePage({ children }) {
  return (
    <div className="min-w-[340px] w-[24%] min-h-[90%] max-h-[94%] p-[32px] 
      rounded-2xl flex justify-center items-center mx-2 relative overflow-hidden">

      {/* 背景圖片放在最底層 */}
      <Image
        src={bgHouse}
        alt="背景圖"
        fill
        className="object-cover absolute z-[-1]"
        priority
      />

      {/* 內容層 */}
      {children}
    </div>
  );
}

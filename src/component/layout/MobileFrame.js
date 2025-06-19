'use client';

import Image from "next/image";
import bgHouse from "@/../public/0.start/bg-house.png";

export default function MobileFramePage({ children }) {
  return (
    <div className="relative min-w-[340px] w-[24%] h-[90dvh] p-[30px] 
    rounded-2xl flex justify-center items-center mx-2 overflow-hidden">

      {/* 背景圖片放在最底層 */}
      <Image
        src={bgHouse}
        alt="背景圖"
        fill
        className="object-cover absolute z-[-1]"
        priority
      />

      {/* 內容層：可滑動 */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden px-2">
        {children}
      </div>
    </div>
  );
}

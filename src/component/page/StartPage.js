'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import bgHouse from '@/../public/0.start/bg-house.png';

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      {/* 背景圖層 */}
      <Image
        src={bgHouse}
        alt="背景圖"
        fill
        className="object-cover absolute z-[-1]"
        priority
      />

      {/* 內容層 */}
      <div className="relative flex flex-col justify-center items-center text-center gap-8 px-6 py-12">
        {/* 標題 */}
        <div className="text-3xl font-semibold text-[#C1F1E6] animate-pulse leading-snug drop-shadow">
          快速測出你的<br />命定科系
        </div>

        {/* 說明文字 */}
        <p className="text-[#EAE7DF] text-sm leading-relaxed drop-shadow max-w-[300px]">
          相傳某位大師圓寂前曾言：<br />
          「人人皆有先天之學，如種子遇土，自然生發。」<br />
          這不是選擇，而是命運的召喚。<br />
          他留下的測驗，能解讀靈魂深處的天賦與歸宿。<br />
          世人求之千載，悟者寥寥。<br />
          如今，機緣降臨於你。<br />
          {/* 準備好迎接你的命定科系了嗎？ */}
        </p>

        {/* 開始按鈕 */}
        <button
          onClick={nextStep}
          className="bg-[#293B42] text-[#E1FFF6] flex items-center px-6 py-2 mt-2
            rounded-full text-lg font-medium transition-all duration-300 
            hover:bg-[#2C8E7D] hover:shadow-[0_0_16px_#A7E7D4]"
        >
          START
        </button>
      </div>
    </MobileFrame>
  );
}

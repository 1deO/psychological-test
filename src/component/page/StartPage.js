'use client';

import MobileFrame from '@/component/layout/MobileFrame';

export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      {/* 內容層 */}
      <div className="w-full h-full flex flex-col justify-center items-center text-center gap-8 px-6 py-12 m-1 select-none">
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

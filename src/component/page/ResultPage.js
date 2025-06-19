'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result1.png';
import result2 from '@/../public/4.result/result2.png';
import result3 from '@/../public/4.result/result3.png';
import result4 from '@/../public/4.result/result4.png';

export default function ResultPage() {
  const psyState = usePsyStore((state) => state);

  const playAgain = function () {
    window.location.reload();
  };

  return (
    <MobileFrame>
      {/* 可滑動容器 */}
      <div className="w-full h-full overflow-y-auto px-4 py-2 flex flex-col items-center gap-4 select-none">
      {/* 根據分數顯示對應結果圖 */}
        {psyState.score < 6 && (
          <Image
            src={result1}
            alt="result1"
            className="w-full max-h-[calc(100dvh-200px)] object-contain"
          />        
        )}

        {psyState.score >= 6 && psyState.score < 8 && (
          <Image
            src={result2}
            alt="result2"
            className="w-full max-h-[calc(100dvh-200px)] object-contain"
          />
        )}

        {psyState.score >= 8 && psyState.score < 10 && (
          <Image
            src={result3}
            alt="result3"
            className="w-full max-h-[calc(100dvh-200px)] object-contain"
          />        
        )}

        {psyState.score >= 10 && (
          <Image
            src={result4}
            alt="result4"
            className="w-full max-h-[calc(100dvh-200px)] object-contain"
          />        
        )}

        {/* Play Again 按鈕 */}
        <div
          className="bg-[#293B42] text-[#E1FFF6] flex 
          px-6 py-3 mt-2 rounded-full justify-center items-center 
          text-lg font-medium transition-all duration-300 
          hover:bg-[#2C8E7D] hover:shadow-[0_0_16px_#A7E7D4] cursor-pointer"
          onClick={playAgain}
        >
          Play Again
        </div>
      </div>
    </MobileFrame>
  );
}

'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import circleImg from '@/../public/0.start/blur-circle-1.png';

export default function DisplayResultPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className='relative flex flex-col justify-center items-center select-none gap-[32px] px-[32px] pt-[80px] pb-[120px] text-center'>

       
        {/* 主提示文字 + pulse 動畫 */}
        <div className='text-3xl font-bold text-fuchsia-200 leading-snug drop-shadow-sm animate-pulse'>
          你的靈魂輪廓已浮現。
          <br />準備好迎接命中注定的科系了嗎？
        </div>

        {/* 查看結果按鈕 */}
      
        <div 
          className={` bg-[#293B42] text-[#E1FFF6] flex 
          px-8 py-4 mt-4 rounded-full justify-center items-center 
          text-md font-medium transition-all duration-300 
          hover:bg-[#2C8E7D] hover:shadow-[0_0_16px_#A7E7D4]`}
        onClick={nextStep}
        > 我的命定科系是…… </div>
        
      </div>
    </MobileFrame>
  );
}

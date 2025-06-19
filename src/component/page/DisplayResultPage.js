'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import circleImg from '@/../public/0.start/blur-circle-1.png';

export default function DisplayResultPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className='relative flex flex-col justify-center items-center gap-[32px] px-[32px] pt-[80px] pb-[120px] text-center'>

        {/* 裝飾光圈 */}
        <Image className='absolute top-0 -translate-y-1/2 pointer-events-none z-[-1]' src={circleImg} alt='circle-top' />
        <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-[-1]' src={circleImg} alt='circle-bottom' />

        {/* 主提示文字 + pulse 動畫 */}
        <div className='text-3xl font-bold text-fuchsia-200 leading-snug drop-shadow-sm animate-pulse'>
          你的靈魂輪廓已浮現。
          <br />準備好迎接命中注定的科系了嗎？
        </div>

        {/* 查看結果按鈕 */}
        <div
          className={`bg-[#89BCFF] w-full rounded-full text-white 
            py-[16px] text-sm flex justify-center items-center font-medium 
            shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
          onClick={nextStep}
        >
          我的命定科系是…
        </div>
      </div>
    </MobileFrame>
  );
}

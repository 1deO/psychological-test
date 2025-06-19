'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import startBtn from '@/../public/0.start/start-btn.png';
import circleImg from "@/../public/0.start/blur-circle-1.png";
import houseImg from "@/../public/0.start/house.jpg";


export default function StartPage({ nextStep }) {
  return (
    <MobileFrame>
      <div className='relative flex justify-center items-center flex-col gap-[24px] px-[32px] text-center'>
        {/* 上方模糊圈圈裝飾 */}
        <Image className='absolute top-0 -translate-y-1/2 pointer-events-none z-[-1]' src={circleImg} alt='circleImg' />

        {/* 標題字串取代圖片 */}
        <div className='text-4xl font-extrabold text-emerald-200 drop-shadow-sm'>
          快速測出你的命定科系
        </div>

        {/* 補充副標題說明 */}
        <div className='text-emerald-200 font-[500] text-[14px] leading-6 tracking-norma'>
          有個神祕ㄉ大師說過，
          每個人都有命定的「它」。
          不是你選擇它，而是「它」選中了你。
          大師圓寂前留下了一組題目，
          後人前仆後繼地投入研究，但至今仍無人能參透其中奧義。
          目前我們只知道，
          這組題目能看穿作答者的命運及獨特的個人特質，找出最適合的科系
          現在，按下開始，
          踏上尋找命定科系的旅程吧！
        </div>

        {/* 開始按鈕 */}
        <Image
          onClick={nextStep}
          className='w-[140px] cursor-pointer hover:scale-105 transition'
          src={startBtn}
          alt='startBtn'
        />

        {/* 底部模糊圈圈裝飾 */}
        <Image className='absolute bottom-0 translate-y-1/2 pointer-events-none z-[-1]' src={circleImg} alt='circleImg' />
      </div>
    </MobileFrame>
  );
}

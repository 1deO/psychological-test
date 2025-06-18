'use client';

import MobileFrame from '@/component/layout/MobileFrame'
import Image from 'next/image';
import q1Up from '@/../public/0.start/q1-up.png';
import q1Down from '@/../public/0.start/q1-down.png';
import circleImg from "@/../public/0.start/blur-circle-2.png";
import { usePsyStore, useQuesStore } from '@/app/store/store';

export default function QuesPage(quesIndex, nextStep) {

  const quesData = useQuesStore( (state)=> state );

  const clickAnswer = function(){
    console.log("Click!!");
  }
  
  return (
    <>
      <MobileFrame>
        {quesIndex}
        {/* {quesData.questions[quesIndex+1].title} */}

        <Image className='absolute top-0 -translate-y-1/2' src={circleImg} alt='circleImg' />

        <div className='flex flex-col items-center gap-[26px]'>

          <Image src={q1Up} className='w-[88px]' alt='q1Up' />

          <div className='text-[#90B62A] border-2 border-[#90B62A] rounded-full w-[48px] h-[48px]
          flex justify-center items-center font-bold text-xl'>
            Q{quesIndex+1}
          </div>

          <div className='text-center font-bold text-2xl text-[#90B62A] mb-[20px]'>麵包師傅要你「靜置 30 分鐘」，你會怎麼做？</div>
          
          <div 
            className='bg-[#bee351] w-full rounded-full text-white 
              py-[16px] text-sm flex justify-center items-center font-medium 
              shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-[2px] transition'
            onClick={clickAnswer}
          > 乖乖待著… 然後偷偷膨脹三倍大</div>
          
          <div 
            className='bg-[#bee351] w-full rounded-full text-white 
              py-[16px] text-sm flex justify-center items-center font-medium 
              shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-[2px] transition'
              onClick={clickAnswer}
          > 等個屁！我已經開始發酵狂飆了</div>
          
          <div 
            className='bg-[#bee351] w-full rounded-full text-white 
              py-[16px] text-sm flex justify-center items-center font-medium 
              shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-[2px] transition'
            onClick={clickAnswer}
          > 發…什麼？我忘記了，我睡著了</div>
          
          <Image src={q1Down} className='w-[88px]' alt='q1Down' />

        </div>

        <Image className='absolute bottom-0 translate-y-1/2' src={circleImg} alt='circleImg' />

      </MobileFrame>
    </>
  );
}
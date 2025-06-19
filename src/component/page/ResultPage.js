'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/../public/4.result/result1.png';
import result2 from '@/../public/4.result/result2.png';
import result3 from '@/../public/4.result/result3.png';
import result4 from '@/../public/4.result/result4.png';

export default function ResultPage() {

  const psyState = usePsyStore( (state) => state );


  const playAgain = function(){
    // todo: 重新整理頁面
    window.location.reload();
  }

  return (
    <>
      <MobileFrame>
        <div className="m-0">
          
          {
            psyState.score < 6 &&
            <Image src={result1} alt='result1' /> //345
          }

          {
            (psyState.score >= 6 && psyState.score < 8) &&
            <Image src={result2} alt='result2' /> //67
          }

          {
            (psyState.score >= 8 && psyState.score < 10) &&
            <Image src={result3} alt='result3' /> //89
          }
          
          {
            psyState.score >= 10 &&
            <Image src={result4} alt='result4' /> //012
          }

          <div 
            className={` bg-[#293B42] text-[#E1FFF6] flex 
            px-6 py-3 mt-3 rounded-full justify-center items-center 
            text-lg font-medium transition-all duration-300 
            hover:bg-[#2C8E7D] hover:shadow-[0_0_16px_#A7E7D4]`}
            onClick={playAgain}
          > Play Again </div>
        </div>
      </MobileFrame>
    </>
  );
}
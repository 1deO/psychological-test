'use client';

import MobileFrame from '@/component/layout/MobileFrame';
import Image from 'next/image';
import q1Up from '@/../public/1.question/q1-up.png';
import q1Down from '@/../public/1.question/q1-down.png';
import circle2Img from '@/../public/1.question/blur-circle-2.png';
import { usePsyStore, useQuestionStore } from '@/app/store/store';

export default function QuestionPage({ questionIndex, nextStep }) {
  const questionData = useQuestionStore((state) => state);
  const psyData = usePsyStore((state) => state);

  const currentQuestion = questionData.questions[String(questionIndex + 1)];
  if (!currentQuestion) return null;

  const clickAnswer = (option) => {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  };

  const questionColors = [
    {
      text: 'text-[#A7E7D4]', // 薄荷青綠（清透的預言感）
      bg: 'bg-[#3C5B57]',     // 深青灰（冷靜又靈性）
      shadow: 'shadow-[0_4px_0_1px_#2C8E7D]', // 深青藍陰影
      border: 'border-[#5DE2C5]', // 淺綠邊框
    },
    {
      text: 'text-[#EED6FF]', // 亮紫粉（通靈水晶感）
      bg: 'bg-[#5A3B66]',     // 靜謐紫（神秘占卜桌）
      shadow: 'shadow-[0_4px_0_1px_#A174B5]', // 紫灰陰影
      border: 'border-[#B890F7]', // 淺紫邊框
    },
    {
      text: 'text-[#EAE7DF]', // 柔米白（預言手札感）
      bg: 'bg-[#2F3C4C]',     // 靛黑藍（深夜測驗）
      shadow: 'shadow-[0_4px_0_1px_#4D94D3]', // 靛藍光
      border: 'border-[#89BCFF]', // 淺藍邊框
    },
  ];
  

  const color = questionColors[questionIndex] || questionColors[0];

  return (
    <>
      <MobileFrame>
       

        <div className="flex flex-col items-center gap-[22px] w-full select-none">
         
          <div
            className={`border-2 rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl ${color.text} ${color.border}`}
          >
            Q{questionIndex + 1}
          </div>

          <div
            className={`text-center font-bold text-3xl ${color.text} mb-[16px] select-none`}
          >
            {currentQuestion.title}
          </div>

          <div className="flex flex-col gap-[16px] w-full">
            {currentQuestion.options.map((option) => (
              <div
                key={option.title}
                className={`w-full rounded-full text-white py-[16px] text-sm flex justify-center items-center font-medium cursor-pointer hover:translate-y-0.5 transition ${color.bg} ${color.shadow}`}
                onClick={() => clickAnswer(option)}
              >
                {option.title}
              </div>
            ))}
          </div>

        </div>

      </MobileFrame>
    </>
  );
}

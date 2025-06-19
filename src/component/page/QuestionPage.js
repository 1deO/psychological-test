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

  // 顏色統一設定
  const questionColors = [
    {
      text: 'text-[#90B62A]',
      bg: 'bg-[#BEE351]',
      shadow: 'shadow-[0px_4px_0px_1px_#90B62A]',
      border: 'border-[#90B62A]',
    },
    {
      text: 'text-[#DD3E3E]',
      bg: 'bg-[#DD3E3E]',
      shadow: 'shadow-[0px_4px_0px_1px_#8D4509]',
      border: 'border-[#DD3E3E]',
    },
    {
      text: 'text-[#1098EC]',
      bg: 'bg-[#89BCFF]',
      shadow: 'shadow-[0px_4px_0px_1px_#1098EC]',
      border: 'border-[#1098EC]',
    },
  ];

  const color = questionColors[questionIndex] || questionColors[0];

  return (
    <>
      <MobileFrame>
        <Image
          className="absolute top-0 -translate-y-1/2 pointer-events-none z-[-1]"
          src={circle2Img}
          alt="circle2Img"
        />

        <div className="flex flex-col items-center gap-[22px] w-full">
          <Image src={q1Up} className="w-[88px]" alt="q1Up" />

          <div
            className={`border-2 rounded-full w-[48px] h-[48px] flex justify-center items-center font-bold text-xl ${color.text} ${color.border}`}
          >
            Q{questionIndex + 1}
          </div>

          <div
            className={`text-center font-bold text-3xl ${color.text} mb-[16px]`}
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

          <Image
            src={q1Down}
            className="w-[88px] pointer-events-none"
            alt="q1Down"
          />
        </div>

        <Image
          className="absolute bottom-0 translate-y-1/2 pointer-events-none z-[-1]"
          src={circle2Img}
          alt="circle2Img"
        />
      </MobileFrame>
    </>
  );
}

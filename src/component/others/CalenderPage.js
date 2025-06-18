'use client';

export default function CalenderPage(year, month, date, day) {
  
  return (
    <>
        <div className='relative text-blue-800 bg-gray-100 w-[320px] h-[480px]
        rounded-2xl flex items-center justify-center flex-col'>
            <div className='flex justify-between gap-3'>
            <div className=''> {year} </div>
            <div className=''> 乙巳年[蛇]四月初四 </div>
            <div className=''> {month} </div>
            </div>
            <div className='text-[240px] font-extrabold'> {date} </div>
            <div className='text-[60px]'> {day} </div>
        </div>
    </>
  );
}
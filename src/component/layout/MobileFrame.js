'use client';

export default function MobileFramePage({children}) {
  
  return (
    <>
        <div className="min-w-[320px] w-[22%] h-[90%] bg-white rounded-2xl flex justify-center items-center mx-2">
            {children}
        </div>
    </>
  );
}
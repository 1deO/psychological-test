'use client';

export default function MobileFramePage({children}) {
  
  return (
    <>
        <div className="min-w-[340px] w-[24%] h-[90%] p-[52px] 
        bg-white rounded-2xl flex justify-center items-center mx-2 relative overflow-hidden">
            {children}
        </div>
    </>
  );
}
"use client"

import Image from "next/image";
import { useState } from "react";

export default function TODO() {

    const [count, setCount] =  useState(0);
    console.log("re-render");

    const addCount = function(){
        setCount(count+1);
    }

    // 監聽工具 副作用==>跟畫面渲染沒有關係
    useEffect(()=>{
        console.log("Count 改變:" + count);
        return ()=>{
            console.log("un-mounted");
        }
    } , [count]);

    return (
        <>
            <div>TODO</div>
            <div onClick={addCount}>
                點擊次數：{count}
            </div>
        </>
    );
}

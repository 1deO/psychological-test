'use client';

import { DatePicker } from 'antd';
import CalenderPage from "@/component/page/CalenderPage"

export default function TestUI() {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      
      {/* <DatePicker onChange={onChange} needConfirm /> */}
      <CalenderPage year="2025" month="五月" date="01" day="星期四"/>
      <CalenderPage year="2025" month="五月" date="02" day="星期五"/>
      <CalenderPage year="2025" month="五月" date="03" day="星期六"/>
      <CalenderPage year="2025" month="五月" date="04" day="星期日"/>
      <CalenderPage year="2025" month="五月" date="05" day="星期一"/>
      <CalenderPage year="2025" month="五月" date="06" day="星期二"/>
      <CalenderPage year="2025" month="五月" date="07" day="星期三"/>
      <CalenderPage year="2025" month="五月" date="08" day="星期四"/>

    </div>
  );
}
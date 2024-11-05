import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={`bg-arrowColor inline-block text-2xl p-[20px] text-white rounded-full absolute left-5 top-1/2 z-10 -translate-y-1/2 ${className}`}
      onClick={onClick}
    ><FaLongArrowAltLeft /></div>
      
  )
}

export default PrevArrow

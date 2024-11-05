import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    <div
      className={`bg-arrowColor inline-block text-2xl p-[20px] text-white rounded-full absolute right-5 top-1/2 -translate-y-1/2 ${className}`}
      onClick={onClick}
    ><FaLongArrowAltRight /></div>
  )
}

export default NextArrow

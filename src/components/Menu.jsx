import React from 'react'

const Menu = ({menuName, className}) => {
  return (
    <ul>
    <li className={`font-dm font-sm text-menuColor hover:font-bold hover:text-menuHover px-5 ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu

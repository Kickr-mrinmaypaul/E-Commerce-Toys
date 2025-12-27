import React from 'react'
import { PiDropSimple } from 'react-icons/pi'

export default function Button({
    name,
    className="",
    icon,
    ...props
}) {
  return (
    <button className={`text-sm xl:text-xl cursor-pointer font-semibold border-2 border-gray-950 px-2 py-0.5 xl:px-3 xl:py-1 ${className}`}{...props}>
        {icon}{name}
    </button>
  )
}

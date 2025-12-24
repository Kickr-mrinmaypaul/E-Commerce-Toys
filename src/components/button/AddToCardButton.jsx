import React from 'react'

function AddToCardButton({
    children,
    icon,
    className="",
    ...props
}) {
  return (
    <button className={`px-3 py-1 ${className}`}{...props}>
       {icon} {children}
    </button>
  )
}

export default AddToCardButton
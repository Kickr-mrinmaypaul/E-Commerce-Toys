import React,{useId} from 'react'


const Input = React.forwardRef(function Input({
    label,
    type="text",
    className="", 
    ...props
}, ref) {
  const id = useId();
  return (
    <div className='w-full '>
      {label && 
        <label 
        htmlFor={id}
        className='inline-block mb-1 pl-1 '>
          {label}
        </label>}

      <input 
      className='px-3 py-1 bg-[#D5559F] text-balck text-sm border rounded-sm'
      type={type} 
      ref={ref}
      id={id}
      {...props}
       />
    </div>
  )
})

export default Input
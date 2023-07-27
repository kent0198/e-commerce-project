import React from 'react'

const SelectOption = ({icon}) => {
  return (
    <div className='w-10 h-10 bg-slate-200 rounded-full border shadow-md flex justify-center text-center items-center hover:bg-gray-800 hover:text-white cursor-pointer hover:border-gray-800'>
      {icon}
    </div>
  )
}

export default SelectOption
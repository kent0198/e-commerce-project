import React from 'react'
import avatar from '../assets/avatar.png'
import moment from 'moment'
import {renderStarFromNumber} from '../ultils/helper'
const Comment = ({image=avatar,name='Anonumous',updatedAt,comment,star}) => {
  return (
    <div className='flex justify-center px-4  py-4'>
      <div className='flex-none pr-3'>
          <img src={image} alt='avatar' className='w-[25px] h-[25px] object-cover rounded-full '/>
      </div>
      <div className='flex flex-col flex-auto '>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold'>{name}</h3>
            <span>{moment(updatedAt)?.fromNow()}</span>
          </div>
          <div className='flex flex-col gap-2 text-sm mt-4 border border-gray-300 py-2 bg-gray-200 rounded-lg'>
            <span className='flex items-center gap-1 px-5'>
              <span>Vote : </span>
               <span className='flex items-center gap-1'>{renderStarFromNumber(star)?.map((el, index) => (
             <span key={index}>{el}</span>
               ))}
            </span> 
            </span>
            <span className='flex items-center gap-1 px-5'>
                <span className='font-semibold'>Comment:</span>
                <span className='flex items-center gap-1'>{comment}</span>
            </span>
          </div>
      </div>
    </div>
  )
}

export default Comment
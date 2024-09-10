import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const ItemCard = () => {
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
      <MdDelete  className='border-2 right-8 flex  absolute border-gray-600 text-gray-600 hover:text-white hover:bg-red-600 text-xl rounded-md p-1 cursor-pointer hover:border-none  transition-all ease-linear'/>
      <img src='https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5' className='w-[50px] h-[50px]'/>
   <div className='leading-5'>
    <h2 className='font-bold text-gray-800 '>Onion Pizza</h2>
    <div className='flex justify-between '>
      <span className='text-green-500 font-bold'>
      ₹120 
      </span>
    </div>
    <div  className='flex justify-center items-center gap-2 absolute h-0 right-7'>
    <FaPlus className='border-2 mb-2 border-gray-200 text-gray-600 hover:text-white hover:bg-green-500 text-xl rounded-md p-1 cursor-pointer hover:border-none transition-all ease-linear ' />
    <span className='mb-2'>1</span>
    <FaMinus className='border-2  mb-2 border-gray-200 text-gray-600 hover:text-white hover:bg-green-500 text-xl rounded-md  p-1 cursor-pointer hover:border-none transition-all ease-linear' />
    </div>
   </div>
    </div>
  )
}

export default ItemCard

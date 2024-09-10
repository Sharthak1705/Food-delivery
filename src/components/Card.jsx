import React from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import {useSelector} from "react-redux";
const Card = () => {
    
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <>
      <div className='fixed right-0 top-0 h-full p-5  w-full lg:w-[20vw]  bg-white'>
   <div className='flex justify-between items-center my-3'>
     <span className='text-xl font-bold text-gray-800'>My Order</span>
     <IoMdClose  className='border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl rounded-md  hover:text-white cursor-pointer hover:border-red-600 hover:bg-red-600'/>
      </div>
       <ItemCard /> 
       <ItemCard /> 
       <ItemCard /> 
             
      <div className='absolute bottom-0 '>
        <h3 className='font-semibold text-gray-800'> Items:</h3>
        <h3 className='font-semibold  text-gray-800'>Total Amount :</h3>
        <hr className=' lg:w-[18vw] w-[90vw] my-2'/>
        <button className='bg-green-400 font-bold py-2 text-white px-3 rounded-lg  w-[90vw] lg:w-[18vw] mb-5'> Checkout</button>
      </div>
      </div>
      
    </>
  )
}

export default Card

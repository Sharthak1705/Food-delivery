import React from 'react'
import FoodData from '../data/FoodData.js'
import FoodCard from './FoodCard';
const Fooditems = () => {
  return (
    <div className='flex flex-wrap gap-10 mx-6 my-10 lg:justify-start  justify-center'>
    {FoodData.map((food) => {
    return (
      <FoodCard 
    key ={food.id}  
    id={food.id} 
    name={food.name} 
    price={food.price} 
    desc={food.desc} 
    rating={food.rating}
    img={food.img} 
    />
    );
     })}
      
    </div>
  );
};

export default Fooditems

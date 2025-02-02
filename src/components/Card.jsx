import React, { useState } from 'react'
 
import { Link } from 'react-router-dom'
export default function Card({item}) {
   
    let{strMealThumb,strMeal,strArea,idMeal}=item
  return (
    <div className="card w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div className="inner relative">
          <img className='w-[200px] md:w-[60%]' src={strMealThumb}/>
          <h4 className='text-h4 line-clamp-1'>{strMeal}</h4>
         {strArea? <p><i class="fa-solid fa-earth-africa "></i> {strArea}</p>:''}
          <Link to={`/mealdetails/${idMeal}`} className='the-link '>View Recipe</Link>
        </div>
       </div>
  )
}

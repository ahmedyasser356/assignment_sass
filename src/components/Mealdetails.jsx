import React, { useEffect, useState } from "react";
 
import { useParams } from "react-router-dom";
import axios from "axios";
 
export default function Mealdetails() {

let {id} =useParams()
let[meal,setMeal]=useState({})
let[arr,setarr]=useState([0,1,2,3,4,5,6,7,8])

let{strMeal,strInstructions,strYoutube,strMealThumb,
  strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,
  strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strSource}=meal
 async function getSpecialMeal(id) {
  try {
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     console.log(data);
     
    setMeal(data.meals[0])
  } catch (error) {
    
  }
 }

 useEffect(function(){
  getSpecialMeal(id)

 },[])
 
  return (<>
    <div className="details-page">
      <h1 className="meal-name">{strMeal}</h1>
      <div className="details-box ">
        <div className="lg:w-1/3 px-6  image-side">
          <img src={strMealThumb}/>
          <div className="flex justify-evenly">
          <a href={strYoutube} target="_blank" className="text-white youtube"><i className="fa-brands fa-youtube "></i> YouTube</a>
          <a href={strSource} target="_blank" className="source text-white">Source</a>
          </div>
        </div>
        <div className="lg:w-1/3 px-6   desc-side">
           <p>{strInstructions}</p>
        </div>
        <div className="lg:w-1/3 px-6   table-side">
           <h4 className="text-h4 font-bold">Ingredients</h4>
            <ul>
                   <li><span>{strIngredient1}</span><span>{strMeasure1}</span></li>
                   <li><span>{strIngredient2}</span><span>{strMeasure2}</span></li>
                   <li><span>{strIngredient3}</span><span>{strMeasure3}</span></li>
                   <li><span>{strIngredient4}</span><span>{strMeasure4}</span></li>
                   <li><span>{strIngredient5}</span><span>{strMeasure5}</span></li>
                   <li><span>{strIngredient6}</span><span>{strMeasure6}</span></li>
                   <li><span>{strIngredient7}</span><span>{strMeasure7}</span></li>
                   <li><span>{strIngredient8}</span><span>{strMeasure8}</span></li>
                   <li><span>{strIngredient9}</span><span>{strMeasure9}</span></li>

            </ul>
        </div>
      </div>
    </div>
     
    </>
  );
}
 

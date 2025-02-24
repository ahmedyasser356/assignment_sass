import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "./Loader";

export default function  Ingredients() {
  function getIngredients() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
  }

  let { data, isLoading } = useQuery({
    queryKey: ["get Ingredients"],
    queryFn: getIngredients,
    select:(data)=>data?.data.meals,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
 
  console.log(data);
  
  if (isLoading) return <Loader></Loader>;
  return (
    <div className="ingredients-page">
      <h2> Ingredients</h2>
      <div className="ingredients-box">
      {data?.map((item)=>< IngredientsItem key={item.strIngredient} strIngredient={item.strIngredient}></ IngredientsItem>)}
      </div>
     
    </div>
  );
}
// 
function  IngredientsItem({strIngredient}) {
  return (
    <div className="ingredients-item  w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="inner h-32 flex flex-wrap justify-center items-center">
        <h3>{strIngredient}</h3>
      </div>
    </div>
  );
}

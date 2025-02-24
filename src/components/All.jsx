import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

export default function All() {
  function getAll() {
    return axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  }
  let {data,isError,isLoading} = useQuery({
    queryKey: ["getAll"],
    queryFn: getAll,
    select:(data)=>data?.data.meals
  });

  
 
 
if(isLoading) return <Loader></Loader> 

  return (
    <>
      {data?.map(function (item) {
        return <Card item={item}></Card>;
      })}
    </>
  );
}

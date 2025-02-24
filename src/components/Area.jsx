import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Loader from "./Loader";

export default function Area() {
  function getArea() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
  }

  let { data, isLoading } = useQuery({
    queryKey: ["getArea"],
    queryFn: getArea,
    select:(data)=>data?.data.meals,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
 
  
  if (isLoading) return <Loader></Loader>;
  return (
    <div className="area-page">
      <h2>Area</h2>
      <div className="area-box">
      {data?.map((item)=><AreaItem key={item.strArea} strArea={item.strArea}></AreaItem>)}
      </div>
     
    </div>
  );
}
// 
function AreaItem({strArea}) {
  return (
    <div className="area-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="inner">
        <h3>{strArea}</h3>
      </div>
    </div>
  );
}

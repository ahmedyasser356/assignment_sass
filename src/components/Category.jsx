import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Category({c}) {

  let[categoryArr,setCategoryArr]=useState([])
 
   async function getCategory(category){
    try {
      let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      setCategoryArr(data.meals)
       
        
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(function(){
    
    getCategory(c)
  },[])
  return (
    <>
        {categoryArr.map(function(item){return <Card item={item}></Card>})}
    </>
  )
}

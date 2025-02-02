import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

export default function All() {
  let[allArr,setAllArr]=useState([])
  let[errMsg,setErrMsg]=useState('')


  
  
  async function getAll() {
   try{
    let {data}=await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    console.log(data.meals);
    
    setAllArr(data.meals)
   }catch(error){
    
   }
  }

  useEffect(function(){
    getAll()
  },[])
  return (
      <>
       {allArr.map(function(item){return <Card item={item}></Card>})}
      </>
  )
}

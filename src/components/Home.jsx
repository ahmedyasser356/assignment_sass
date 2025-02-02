import React, { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
 let navigate = useNavigate()
  
  return (
    <div className='home-page'>
    <h1 className='home-title'>Learn, Cook, Eat Your Food</h1>
    <div className="home-tabs hidden sm:flex ">
      <NavLink to={''}>all</NavLink>
      <NavLink to={'category/beef'}>beef</NavLink>
      <NavLink to={'category/breakfast'}>breakfast</NavLink>
      <NavLink to={'category/chicken'}>chicken</NavLink>
      <NavLink to={'category/dessert'}>dessert</NavLink>
      <NavLink to={'category/goat'}>goat</NavLink>
      <NavLink to={'category/lamb'}>lamb</NavLink>
      <NavLink to={'category/miscellaneous'}>miscellaneous</NavLink>
      <NavLink to={'category/pasta'}>pasta</NavLink>
      <NavLink to={'category/pork'}>pork</NavLink>
      <NavLink to={'category/seafood'}>seafood</NavLink>
      <NavLink to={'category/side'}>side</NavLink>
      <NavLink to={'category/starter'}>starter</NavLink>
      <NavLink to={'category/vegan'}>vegan</NavLink>
      <NavLink to={'category/vegetarien'}>vegetarien</NavLink>
    </div>

    <select className='sm:hidden' onChange={(e)=>{navigate(`category/${e.target.value}`)}} >
        <option>beef</option>
        <option>breakfast</option>
        <option>chicken</option>
        <option>dessert</option>
        <option>goat</option>
        <option>lamb</option>
        <option>miscellaneous</option>
        <option>pasta</option>
        <option>pork</option>
        <option>seafood</option>
        <option>side</option>
        <option>starter</option>
        <option>vegan</option>
        <option>vegetarien</option>
</select>
     <div className="display-card">
        <Outlet></Outlet>
     </div>
    </div>
  )
}

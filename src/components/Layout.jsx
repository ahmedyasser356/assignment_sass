import React, { useState } from 'react'
import image1 from '../assets/images/logo-BfNap0Pe.png'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Footer from './Footer'
 
 
export default function Layout() {

  let[showLayer,setShowLayer]=useState(false)
  return (
   <>
    <div className="container mt-5">
      <i onClick={()=>{setShowLayer(true)}} class="fa-solid fa-bars text-xl hover:cursor-pointer"></i>
    </div>
    <div onClick={()=>{ setShowLayer(false)}} className={showLayer?'layer':'layer translate-x-[-100%]'}>
       <div onClick={(e)=>{e.stopPropagation()}} className="left-side ">
        <img src={image1}  alt="" />
        <Link to={''} className="left-tabs-meals text-xl"><i class="fa-solid fa-utensils me-2"></i> Meals</Link>
        <h5 className="left-tabs-ingredients text-xl"><i class="fa-solid fa-utensils me-2"></i> Ingredients</h5>
        <h5 className="left-tabs-area text-xl"><i class="fa-solid fa-utensils me-2"></i> Area</h5>
        </div>
    </div>
    <div className='relative'>
      <div className="left-side translate-x-[-100%] sm:translate-x-0">
        <img src={image1}  alt="" />
     
        <Link to={''} className="left-tabs-meals text-xl"><i class="fa-solid fa-utensils me-2"></i> Meals</Link>
        <Link to={'/ingredients'} className="left-tabs-ingredients text-xl"><i class="fa-solid fa-utensils me-2"></i> Ingredients</Link>
        <Link to={'/area'} className="left-tabs-area text-xl"><i class="fa-solid fa-utensils me-2"></i> Area</Link>
      </div>
    </div>
    <div className="right-side left-0 sm:left-[250px] bg-slate-500 ">
       <div className="container mx-auto ">
       
       <Outlet></Outlet>
       
       </div>
       <Footer></Footer>
      </div>
      
    </>
  )
}

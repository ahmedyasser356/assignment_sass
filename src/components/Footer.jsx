import React from 'react'
import image1 from '../assets/images/logo-BfNap0Pe.png'
export default function Footer() {
  return (
    <footer className='bg-white relative '>
<div className="container">
<div className="top flex flex-wrap justify-between py-6 border-b border-b-gray-200 ">
        <div className="left flex flex-wrap">
          <img src={image1} className='w-9 me-5' alt="" />
          <h3 className='text-h3 font-bold'>Recipe</h3>
        </div>
        <div className="right">
          <h3 className='text-h3 font-bold text-blue-700'>Route</h3>
        </div>
      </div>
      <div className="bottom">
        <p className='py-6 text-[13px] text-gray-600'>© 2025 Nagy Osama™. All Rights Reserved.</p>
      </div>
</div>
    </footer>
  )
}

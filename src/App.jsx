import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import All from './components/All' 
import Mealdetails from './components/Mealdetails'
import NotFound from './components/NotFound'
import Category from './components/Category'
import Area from './components/Area'
import Ingredients from './components/Ingredients'

 

function App() {
  
let router = createBrowserRouter(
  [{path:'/',element:<Layout/>,children:[
    {path:'/',element:<Home></Home>,children:[
      {index:true,element:<All/>},
      {path:'category/:c',element:<Category/>},
    ]},
    {path:'/area',element:<Area></Area>},
    {path:'/ingredients',element:<Ingredients></Ingredients>},
    {path:'/mealdetails/:id',element:<Mealdetails></Mealdetails>},
    {path:'*',element:<NotFound></NotFound>},
  ]
}])


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

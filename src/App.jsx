import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import All from './components/All'
import Beef from './components/Beef'
import Breakfast from './components/Breakfast'
import Chicken from './components/Chicken'
import Dessert from './components/Dessert'
import Goat from './components/Goat'
import Lamb from './components/Lamb'
import Miscellaneous from './components/Miscellaneous'
import Pasta from './components/Pasta'
import Pork from './components/Pork'
import Seafood from './components/Seafood'
import Side from './components/Side'
import Starter from './components/Starter'
import Vegan from './components/Vegan'
import Vegetarien from './components/Vegetarien'
import Mealdetails from './components/Mealdetails'
import NotFound from './components/NotFound'

 

function App() {
  
let router = createBrowserRouter(
  [{path:'/',element:<Layout/>,children:[
    {path:'/',element:<Home></Home>,children:[
      {index:true,element:<All/>},
      {path:'category/beef',element:<Beef></Beef>},
       
      {path:'category/breakfast',element:<Breakfast/>},
      {path:'category/chicken',element:<Chicken></Chicken>},
      {path:'category/dessert',element:<Dessert></Dessert>},
      {path:'category/goat',element:<Goat></Goat>},
      {path:'category/lamb',element:<Lamb></Lamb>},
      {path:'category/miscellaneous',element:<Miscellaneous></Miscellaneous>},
      {path:'category/pasta',element:<Pasta></Pasta>},
      {path:'category/pork',element:<Pork></Pork>},
      {path:'category/seafood',element:<Seafood></Seafood>},
      {path:'category/side',element:<Side></Side>},
      {path:'category/starter',element:<Starter></Starter>},
      {path:'category/vegan',element:<Vegan></Vegan>},
      {path:'category/vegetarien',element:<Vegetarien></Vegetarien>},
    ]},
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

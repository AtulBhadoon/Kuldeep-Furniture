import React from 'react'
import Layout from './Pages/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Bed from './Pages/Bed'
import Door from './Pages/Door'
import Steel from './Pages/Steel'
import Contact from './Pages/Contact'



function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/',
        element:<Home/>
      },
      {
        path:'/bed',  
        element:<Bed/>
      },
      {
        path:'/door',
        element:<Door/>
      },
      {
        path:'/steel',
        element:<Steel/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
    }
  ])



  return (
    <div>
       
        <RouterProvider router={router}/>
      
      
    </div>
  )
}

export default App

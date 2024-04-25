import React from 'react'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'

import Login from './auth/Login'
import Browse from './browse/Browse'



const Body = () => {
 

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
         {
            path:"/browse",
            element:<Browse/>
        }

    ])





  return (
    <div className='relative  m-0 p-0 box-border leading-none'>
      <RouterProvider router={appRouter}   />
    </div>
  )
}

export default Body

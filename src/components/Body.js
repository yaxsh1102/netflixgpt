import React from 'react'
import Login from './Login'
import { createBrowserRouter, Router } from 'react-router-dom'
import Browse from './Browse' ;
import { RouterProvider } from 'react-router-dom';

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:"/" ,
            element:<Login></Login>
        } ,

        {
            path:"/browse" ,
            element:<Browse></Browse>

        }
    ])
    

  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body
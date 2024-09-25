import React from 'react'
import Home from './Pages/Home' 
import Blog from './Pages/Blog'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Advertising from './Pages/Advertising'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Advertising",
    element: <Advertising/>,
  },
]);

export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

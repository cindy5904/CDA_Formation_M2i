import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar';
import ErreurPage from './components/ErreurPage';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import Component3 from './components/Component3';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErreurPage />,
      children: [
        {path: '/', element: <HomePage />},
        {path: '/form', element: <FormPage />},
        {path: '/compo', element: <Component3 />}
      ]
    }
  ])
  
  export default router
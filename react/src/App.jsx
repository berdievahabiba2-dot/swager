
import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AuthFlow from "./Pages/AuthFlow";
import Layout from './Layout/Layout'
import Login from './Pages/Login'
import Services from './Pages/Services'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Users from './Pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AuthFlow><Home/> </AuthFlow>
      },
      {
        path: 'services',
        element: <AuthFlow><Services/></AuthFlow>
      },
       {
        path: 'users',
        element: <AuthFlow><Users/></AuthFlow>
      },
      {
        path: 'login',
        element: <AuthFlow><Login/></AuthFlow>
      },
      {
        path: '*',
        element: <AuthFlow><NotFound/></AuthFlow>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

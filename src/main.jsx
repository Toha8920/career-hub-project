import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Statics from './components/Statics/Statics.jsx'
import Blog from './components/Blog/Blog'
import AppliedJob from './components/AppliedJob/AppliedJob'
import JobDetails from './components/JobDetails/JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Statics></Statics>
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/job/:jobId',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

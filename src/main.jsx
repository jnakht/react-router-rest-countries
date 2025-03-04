import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Countries from './Components/Countries/Countries.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/countries',
        element: <Countries></Countries>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/about',
        element: <About></About>,
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Users from './Components/Users/Users';
import UserDetails from './Components/UserDetails/UserDetails';

const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>,
      children:[
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/users',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Users/>
        },
        {
          path:'/user/:userId',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element:<UserDetails/>
        }
      ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

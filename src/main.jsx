import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './assets/error Massage/Error.jsx';
import Root from './assets/Router/Root.jsx';
import Assignment from './assets/Assignment/Assignment.jsx';
import CreatAssignment from './assets/Creat/CreatAssignment.jsx';
import MyA from './assets/my assignment/MyA.jsx';
import Singup from './assets/singup/Singup.jsx';
import Login from './assets/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[ 
      {
        path:"/",
        element:<App></App>,

      },
      {
        path:"/assignment",
        element:<Assignment></Assignment>,
      },
      {
        path:"/createassignment",
        element:<CreatAssignment></CreatAssignment>
      },
      {
        path:"/myassignment",
        element:<MyA></MyA>,

      },
      {
        path:"/getstart",
        element:<Singup></Singup>,
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ] 

    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

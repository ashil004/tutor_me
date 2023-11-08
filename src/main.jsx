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
import AuthProvider from './assets/provider/Authprovider.jsx';
import Priveterouter from './assets/provider/Priveterouter.jsx';
import AssignmentView from './assets/Assignment/AssignmentView.jsx';
import PaddingData from './assets/AssignmentViweing.jsx/PaddingData.jsx';



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
        element:<Priveterouter><CreatAssignment></CreatAssignment></Priveterouter>
      },
      {
        path:"/myassignment/:id",
        element:<Priveterouter><MyA></MyA></Priveterouter>,
        loader : ({params}) => fetch(`http://localhost:5000/data/${params.id}`)

      },
      {
        path:"/getstart",
        element:<Singup></Singup>,
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/viewid/:id",
        element:<Priveterouter><AssignmentView></AssignmentView></Priveterouter>,
        loader : ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
      },
      {
        path:"/paddingdata",
        element:<Priveterouter><PaddingData></PaddingData></Priveterouter>,
        
      }
    ] 

    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)

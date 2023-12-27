import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Register from './components/Verify/Register/Register';
import Login from './components/Verify/Login/Login';
import AuthProvider from './components/provider/AuthProvider';
import Products from './components/alllServiceCategory/AllProduct/products';
import ProductCategory from './components/alllServiceCategory/AllProduct/ProductCategory';
import ProductCard from './components/alllServiceCategory/AllProduct/ProductCard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Review from './components/Home/review/review';
import ErrorPage from './components/ErrorElement/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/products",
        element:<Products></Products>
       
      },
      {
        path:"/productCard/:id",
        element:<ProductCard></ProductCard>,
        
      }
      ,
      {
        path: "/productCategory",
        element:<ProductCategory></ProductCategory>
      },
      {
        path:"/review",
        element: <Review></Review>
      }
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <div className='max-w-6xl mx-auto bg-black'>
<RouterProvider router={router} />

    </div>
 </AuthProvider>
  </React.StrictMode>,
)

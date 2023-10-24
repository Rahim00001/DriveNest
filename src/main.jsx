import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Mycart from './components/Mycart';
import AddCar from './components/AddCar';
import Register from './components/Register';
import ToyotaCars from './components/toyota/ToyotaCars';
import BrandsItem from './components/BrandsItem';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addcar',
        element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
      },
      {
        path: '/mycart',
        element: <Mycart></Mycart>
      },
      {
        path: '/brand/BMW',
        element: <ToyotaCars></ToyotaCars>,
        loader: () => fetch('http://localhost:5000/car')
      },
      {
        path: '/brand/:brand_name',
        element: <BrandsItem></BrandsItem>,
        loader: ({ params }) => fetch(`http://localhost:5000/car/${params.brand}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

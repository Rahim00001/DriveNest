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
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import BmwCars from './components/bmw/BmwCars';
import MarcedesCars from './components/mercedes/MarcedesCars';
import TeslaCars from './components/tesla/TeslaCars';
import AudiCars from './components/audi/AudiCars';
import Fordcars from './components/ford/Fordcars';
import UpdateCar from './components/UpdateCar';
import Detiles from './components/Detiles';


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
        path: '/update/:id',
        element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
        loader: ({ params }) => fetch(`https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car/${params.id}`)
      },
      {
        path: '/detiles/:id',
        element: <PrivateRoute><Detiles></Detiles></PrivateRoute>,
        loader: ({ params }) => fetch(`https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car/${params.id}`)
      },
      {
        path: '/mycart',
        element: <PrivateRoute><Mycart></Mycart></PrivateRoute>
      },
      {
        path: '/brand/Toyota',
        element: <ToyotaCars></ToyotaCars>,
        loader: () => fetch('https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car')
      },
      {
        path: '/brand/BMW',
        element: <BmwCars></BmwCars>,
        loader: () => fetch('https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car')
      },
      {
        path: '/brand/Mercedes-Benz',
        element: <MarcedesCars></MarcedesCars>,
        loader: () => fetch('https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car')
      },
      {
        path: '/brand/Ford',
        element: <Fordcars></Fordcars>,
        loader: () => fetch('https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car')
      },
      {
        path: '/brand/Tesla',
        element: <TeslaCars></TeslaCars>,
        loader: () => fetch('https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car')
      },
      {
        path: '/brand/Audi',
        element: <AudiCars></AudiCars>,
        loader: () => fetch('https://drive-nest-server-a10-8fz4qqqc2-rahim-s-projects.vercel.app/car')
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

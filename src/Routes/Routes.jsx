import {
    Navigate,
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import AddToys from "../Components/AddToys/AddToys";
import MyToys from "../Components/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ToysDetails from "../CardComponents/ToysDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllToys from "../AllToys/AllToys";
import ToyDetail from "../AllToys/ToyDetail";
import UpdateToy from "../Components/MyToys/UpateToyWithModal/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'toysDetails/:id',
                element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/addToy')
            },
            {
                path: 'addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: 'singleToyDetail/:id',
                element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/addToy/${params.id}`)
            },
            
        ]
    },
    
    {
        path: 'myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
    },
    {
        path: 'updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`http://localhost:5000/addToy/${params.id}`)
    }
]);

export default router; 
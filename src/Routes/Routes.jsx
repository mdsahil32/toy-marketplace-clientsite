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
                loader:() => fetch('http://localhost:5000/addToy')
            },
            {
                path: 'addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            
        ]
    },
    {
        path:'toysDetails/:id',
        element: <PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
    },

]);

export default router; 
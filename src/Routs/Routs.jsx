/* eslint-disable react/jsx-no-undef */
import {
    createBrowserRouter,
    
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import College from "../Banner/College/College";
import Addmission from "../Banner/Addmission/Addmission";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import MyCollege from "../Banner/MyCollege/MyCollege";
import Details from "../Banner/Details/Details";
// import GropuPhoto from "../Banner/GropuPhoto/GropuPhoto";

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'college',
                element:<College></College>
            },
            {
                path:'addmission',
                element:<Addmission></Addmission>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'secret',
                element:<Secret></Secret>
            },
            {
                path:'mycollege',
                element:<MyCollege></MyCollege>
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            }
           
        ]
    },
    
]);
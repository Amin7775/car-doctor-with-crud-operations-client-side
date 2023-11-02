import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Booking from "../pages/Bookings/Booking";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/about",
                element: <About></About>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/signup",
                element: <SignUp></SignUp>
            },
            {
                path:"/checkout/:id",
                element: <BookService></BookService>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Booking></Booking></PrivateRoute>
            }
        ]
    }
])
   

export default routes;
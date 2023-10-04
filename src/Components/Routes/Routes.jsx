import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import ErrorHandle from "../pages/ErrorHandle/ErrorHandle";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement : <ErrorHandle></ErrorHandle>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/news/:id",
                element : <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            }
        ]
    },
]);

export default router;
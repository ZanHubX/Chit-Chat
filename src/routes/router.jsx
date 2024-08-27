import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login/> ,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
    {
        path: "/home",
        element: <Home />,
    }
]);

export default router;
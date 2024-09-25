import {createBrowserRouter} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage.tsx";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.tsx";
import UserPage from "../../pages/UserPage/UserPage.tsx";
import LoginPage from "../../pages/AuthPages/LoginPage/LoginPage.tsx";
import RegistrationPage from "../../pages/AuthPages/RegistrationPage/RegistrationPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/user/:id",
        element: <UserPage/>
    },
    {
        path: "/signIn",
        element: <LoginPage/>
    },
    {
        path: "signUp",
        element: <RegistrationPage/>
    }

])
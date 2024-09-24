import {createBrowserRouter} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage.tsx";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.tsx";
import UserPage from "../../pages/UserPage/UserPage.tsx";


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

])
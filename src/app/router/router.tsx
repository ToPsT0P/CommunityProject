import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage.tsx";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.tsx";
import UserPage from "../../pages/UserPage/UserPage.tsx";
import LoginPage from "../../pages/AuthPages/LoginPage/LoginPage.tsx";
import RegistrationPage from "../../pages/AuthPages/RegistrationPage/RegistrationPage.tsx";
import PrivateRoute from "./PrivateRoute.tsx";

export const router = createBrowserRouter([
    {
        path: "/CommunityProject",
        element: (
            <PrivateRoute>
                <MainPage />
            </PrivateRoute>
        ),
        errorElement: <ErrorPage />
    },
    {
        path: "/CommunityProject/user/:id",
        element: (
            <PrivateRoute>
                <UserPage />
            </PrivateRoute>
        )
    },
    {
        path: "/CommunityProject/signIn",
        element: <LoginPage />
    },
    {
        path: "/CommunityProject/signUp",
        element: <RegistrationPage />
    }
]);

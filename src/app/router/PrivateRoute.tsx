import { Navigate } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux.ts";
import {userSlice} from "../store/reducers/userReducer.ts";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {

    const dispatch = useAppDispatch();
    dispatch(userSlice.actions.isLogin(""))
    const { isLogin } = useAppSelector(state => state.userReducer);

    if (!isLogin) {
        return <Navigate to="/CommunityProject/signIn" />;
    }

    return children;
};

export default PrivateRoute;

import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {useAppDispatch} from "../shared/hooks/redux.ts";
import {useEffect} from "react";
import {fetchData} from "./store/reducers/ActionCreator.ts";
import {userSlice} from "./store/reducers/userReducer.ts";

const App = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData(1))
        dispatch(userSlice.actions.isLogin(""))
    }, []);

  return (
      <div className="overflow-x-hidden">
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
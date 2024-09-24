import {RouterProvider} from "react-router-dom";
import {router} from "./router/router.tsx";
import {useAppDispatch} from "../shared/hooks/redux.ts";
import {useEffect} from "react";
import {fetchData} from "./store/reducers/ActionCreator.ts";

export function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, []);

  return (
      <div class="overflow-x-hidden">
        <RouterProvider router={router}/>
      </div>
  )
}

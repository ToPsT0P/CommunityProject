import UserCard from "../../entity/userCard/UserCard.tsx";
import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux.ts";
import Navbar from "../../widgets/Navbar/Navbar.tsx";
import {communityUsersSlice} from "../../app/store/reducers/communityReducer.ts";
import {useEffect} from "react";
import {fetchData} from "../../app/store/reducers/ActionCreator.ts";

const MainPage = () => {

    const { data, page } = useAppSelector(state => state.communityReducer)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchData(page))
    }, [page]);

    return (
        <div>
            <Navbar/>
            <div className="py-5 px-5 gap-5 flex flex-wrap justify-center">
                {data.map((item, i) => {
                    return <UserCard item={item} key={i}/>
                })}
            </div>
            <div className="py-5 px-5 gap-10 flex flex-wrap justify-center mb-5">
                <span onClick={() => {if(page > 1)dispatch(communityUsersSlice.actions.setPage(page - 1))}} className="p-3 border border-myColor bg-myColor rounded-2xl cursor-pointer text-white hover:shadow-2xl duration-200">Предыдущая</span>
                <span onClick={() => {dispatch(communityUsersSlice.actions.setPage(1))}} className="p-3 border border-myColor bg-myColor rounded-2xl cursor-pointer text-white hover:shadow-2xl duration-200">Главная</span>
                <span onClick={() => {dispatch(communityUsersSlice.actions.setPage(page + 1))}} className="p-3 border border-myColor bg-myColor rounded-2xl cursor-pointer text-white hover:shadow-2xl duration-200 ">Следующая</span>
            </div>
        </div>
    );
};

export default MainPage;
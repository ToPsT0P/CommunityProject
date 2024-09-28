import {useAppDispatch, useAppSelector} from "../../shared/hooks/redux.ts";
import {Link} from "react-router-dom";
import {userSlice} from "../../app/store/reducers/userReducer.ts";



//TODO Сделать интерфейс Навбара
const Navbar = (state) => {

    const { isLogin } = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch();

    return (
        <div className="w-screen h-72 bg-myColor flex flex-wrap pb-5 justify-center">
            <div className="w-screen px-8 py-3 h-fit flex justify-end">
                {isLogin == true
                    ?
                    <button onClick={() => {dispatch(userSlice.actions.setLoginStateOff(false))}} className="w-20 h-10 bg-myColor rounded-xl border-2 border-white text-white">Выход</button>
                    :
                    <Link to={"/signIn"} className="w-20 h-10 bg-myColor rounded-xl border-2 border-white text-white flex justify-center items-center hover:shadow-2xl duration-200">Войти</Link>
                }

            </div>
            <div className="text-white flex flex-wrap justify-center pb-5">
                <h1 className="text-5xl w-full justify-center flex h-fit text-center px-3">Наша команда</h1>
                <h3 className="w-1/3 min-w-80 pt-3 flex text-center text-sm">Это опытные специалисты, хорошо разбирающиеся во
                    всех задачах,
                    которые ложатся на их плечи, и умеющие находить выход из любых,
                    даже самых сложных ситуаций. </h3>
            </div>
        </div>
    );
};

export default Navbar;
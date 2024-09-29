import {useEffect, useState} from "react";
import axios from "axios";
import {userSlice} from "../../app/store/reducers/userReducer.ts";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../shared/hooks/redux.ts";
import "./userPage.css"

interface ICurrentUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,

}

const UserPage = () => {

    const dispatch = useAppDispatch()

    const [currentUser, setCurrentUser] = useState<ICurrentUser>()

    const currentUserFetching = async () => {
        const id = window.location.pathname.split("/")[3]
        const response = await axios.get(`https://reqres.in/api/users/${id}`)
        setCurrentUser(response.data.data)
    }

    useEffect(() => {
        currentUserFetching()
    }, []);


    return (
        <div className="w-screen h-screen">
            <div className="w-screen h-72 bg-myColor flex flex-wrap pb-5 justify-center navbar">
                <div className="w-screen px-8 py-3 h-fit flex justify-between">
                    <Link to={"/CommunityProject"}
                          className="w-20 h-10 bg-myColor rounded-xl border-2 border-white text-white flex justify-center items-center">
                        Назад
                    </Link>
                    <button onClick={() => {
                        dispatch(userSlice.actions.setLoginStateOff(false))
                    }}
                            className="w-20 h-10 bg-myColor rounded-xl border-2 border-white text-white">
                        Выход
                    </button>
                </div>
                <div className="text-white pb-5 w-2/3 flex items-center gap-6 flex-row-reverse user-info">
                    <div className="flex flex-wrap myTextCenter">
                        <p className="text-7xl user-name w-full text-center">{currentUser?.first_name} {currentUser?.last_name}</p>
                        <p className="text-4xl w-full text-center">Партнер</p>
                    </div>
                    <img src={currentUser?.avatar} alt="" className="rounded-full h-48 aspect-square user-avatar"/>
                </div>
            </div>
            <div className="flex flex-wrap justify-center pt-10 gap-2 flex-row-reverse">
                <div className="gap-2 flex flex-wrap items-start h-fit justify-center">
                    <p className="w-2/3">8 985 691 01-45</p>
                    <p className="w-2/3">{currentUser?.email}</p>
                </div>
                <div className="w-2/3 flex gap-3 flex-wrap">
                    <p>
                        Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов,
                        включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты.
                        Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет
                        применения новейших технологий и увеличивать продажи, используя самые современные аналитические
                        инструменты.
                    </p>
                    <p>
                        В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с
                        трудностями.
                        Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это
                        осознание
                        того,
                        что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том,
                        что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться
                        самостоятельно".
                    </p>
                    <p>
                        Помимо разнообразных проектов для клиентов финансового сектора,
                        Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник
                        эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте,
                        а также инвестором других бизнес-проектов.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default UserPage;
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useAppDispatch} from "../../shared/hooks/redux.ts";
import {userSlice} from "../../app/store/reducers/userReducer.ts";

interface IUser {
    password?: string;
    login?: string;
    password_confirmation?: string;
    email: string;
}

interface IValidationErrors {
    login?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
}

const Layout = ({ logOrAuth }: { logOrAuth: string }) => {
    const [userData, setUserData] = useState<IUser>({
        email: "",
        password: "",
        login: "",
        password_confirmation: ""
    });

    const [errors, setErrors] = useState<IValidationErrors>({});

    const dispatch = useAppDispatch()

    const validate = () => {
        const newErrors: IValidationErrors = {};

        if (!userData.email || !/^\S+@\S+\.\S+$/.test(userData.email)) {
            newErrors.email = "Неверный формат электронной почты";
        }

        if (logOrAuth === "Auth") {
            if (!userData.login || userData.login.trim().length === 0) {
                newErrors.login = "Имя не должно быть пустым";
            }
            if (!userData.password || userData.password.length < 8) {
                newErrors.password = "Пароль должен содержать не менее 8 символов";
            }
            if (userData.password !== userData.password_confirmation) {
                newErrors.password_confirmation = "Пароли не совпадают";
            }
        } else {
            if (!userData.password || userData.password.length < 8) {
                newErrors.password = "Пароль должен содержать не менее 8 символов";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const RegistrationSubmit = async () => {
        if (validate()) {
            try {
                const response = await axios.post("https://reqres.in/api/register", {
                    // В идеале тут передавать данные от пользователя, но я попробовал
                    // Сервер готов регистрировать только определенных юзеров, потому в коде я
                    // Прокидываю нужны пропсы, будь настоящий сервер, работало бы как надр
                    email: "eve.holt@reqres.in",
                    password: "pistol"
                });
                console.log(response.data);
            } catch (e) {
                if (e.response) {
                    console.log("Ошибка сервера:", e.response.data);
                } else {
                    console.log("Ошибка:", e.message);
                }
            }
        }
    };

    const LoginSubmit = async () => {
        if (validate()) {
            try {
                const response = await axios.post("https://reqres.in/api/login", {
                    // В идеале тут передавать данные от пользователя, но я попробовал
                    // Сервер готов регистрировать только определенных юзеров, потому в коде я
                    // Прокидываю нужны пропсы, будь настоящий сервер, работало бы как надр
                    email: "eve.holt@reqres.in",
                    password: "pistol"
                });
                dispatch(userSlice.actions.setToken(response.data.token))

            } catch (e) {
                if (e.response) {
                    console.log("Ошибка сервера:", e.response.data);
                } else {
                    console.log("Ошибка:", e.message);
                }
            }
            }
    }


    return (
        <div className="shadow-2xl w-[500px] h-fit gap-y-3 p-5 flex flex-wrap rounded-xl">
            {logOrAuth === "Auth" ? (
                <h2 className="text-2xl mb-5">Регистрация</h2>
            ) : (
                <h2 className="text-2xl mb-5">Авторизация</h2>
            )}

            {logOrAuth === "Auth" && (
                <>
                    <p className="w-full pl-2">Имя</p>
                    <input
                        className="w-full h-12 rounded-xl px-2 bg-gray"
                        type="text"
                        value={userData.login}
                        placeholder="Евгений"
                        onChange={(e) => setUserData({ ...userData, login: e.target.value })}
                    />
                    {errors.login && <p className="text-errorColor pl-2">{errors.login}</p>}
                </>
            )}

            <p className="w-full pl-2">Электронная почта</p>
            <input
                className="w-full h-12 rounded-xl px-2 bg-gray"
                type="text"
                placeholder="example@gmail.com"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            {errors.email && <p className="text-errorColor pl-2">{errors.email}</p>}

            <p className="w-full pl-2">Пароль</p>
            <input
                className="w-full h-12 rounded-xl px-2 bg-gray"
                type="password"
                placeholder="*****"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
            {errors.password && <p className="text-errorColor pl-2">{errors.password}</p>}

            {logOrAuth === "Auth" && (
                <>
                    <p className="w-full pl-2">Подтвердите пароль</p>
                    <input
                        className="w-full h-12 rounded-xl px-2 bg-gray"
                        type="password"
                        placeholder="*****"
                        value={userData.password_confirmation}
                        onChange={(e) =>
                            setUserData({ ...userData, password_confirmation: e.target.value })
                        }
                    />
                    {errors.password_confirmation && (
                        <p className="text-errorColor pl-2">{errors.password_confirmation}</p>
                    )}
                </>
            )}
            {logOrAuth == "Auth"
                ?
                <button
                    className="w-full h-12 bg-myColor text-white flex justify-center items-center rounded-xl"
                    onClick={RegistrationSubmit}>
                    Зарегистрироваться
                </button>
                :
                <button
                    className="w-full h-12 bg-myColor text-white flex justify-center items-center rounded-xl"
                    onClick={LoginSubmit}>
                    Войти
                </button>
            }

            {logOrAuth == "Auth"
            ?
                <Link to={"/signIn"} className="pl-2 hover:text-myColor duration-200">
                    У вас есть Аккаунт?
                </Link>
            :
                <Link to={"/signUp"} className="pl-2 hover:text-myColor duration-200">
                    Нет Аккаунта - создай!
                </Link>
            }
        </div>
    );
};

export default Layout;
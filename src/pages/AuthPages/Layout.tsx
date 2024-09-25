import {useState} from "react";

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

    const handleSubmit = () => {
        if (validate()) {
            console.log("Данные отправлены", userData);
        } else {
            console.log("Ошибка валидации", errors);
        }
    };

    return (
        <div className="shadow-2xl w-[500px] h-fit gap-y-3 p-5 flex flex-wrap">
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
                        onChange={(e) => setUserData({ ...userData, login: e.target.value })}
                    />
                    {errors.login && <p className="text-errorColor pl-2 mt-1">{errors.login}</p>}
                </>
            )}

            <p className="w-full pl-2">Электронная почта</p>
            <input
                className="w-full h-12 rounded-xl px-2 bg-gray"
                type="text"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            {errors.email && <p className="text-errorColor pl-2 mt-1">{errors.email}</p>}

            <p className="w-full pl-2">Пароль</p>
            <input
                className="w-full h-12 rounded-xl px-2 bg-gray"
                type="password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
            {errors.password && <p className="text-errorColor pl-2 mt-1">{errors.password}</p>}

            {logOrAuth === "Auth" && (
                <>
                    <p className="w-full pl-2">Подтвердите пароль</p>
                    <input
                        className="w-full h-12 rounded-xl px-2 bg-gray"
                        type="password"
                        value={userData.password_confirmation}
                        onChange={(e) =>
                            setUserData({ ...userData, password_confirmation: e.target.value })
                        }
                    />
                    {errors.password_confirmation && (
                        <p className="text-errorColor pl-2 mt-1">{errors.password_confirmation}</p>
                    )}
                </>
            )}
            <button
                className="w-full h-12 bg-myColor text-white flex justify-center items-center rounded-xl"
                onClick={handleSubmit}
            >
                {logOrAuth === "Auth" ? <>Зарегистрироваться</> : <>Войти</>}
            </button>
        </div>
    );
};

export default Layout;

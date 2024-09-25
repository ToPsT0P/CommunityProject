import Layout from "../Layout.tsx";
import {Link} from "react-router-dom";
import {MdOutlineArrowBackIos} from "react-icons/md";

const LoginPage = () => {
    return (
        <div className="w-screen h-screen justify-center items-center flex">
            <Link to={"/"} className="absolute top-5 left-5 flex items-center gap-x-2"><MdOutlineArrowBackIos className="pt-1" />Назад</Link>
            <Layout logOrAuth="Login"/>
        </div>
    );
};

export default LoginPage;
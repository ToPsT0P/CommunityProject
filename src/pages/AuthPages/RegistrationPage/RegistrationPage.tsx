import Layout from "../Layout.tsx";
import {Link} from "react-router-dom";
import {MdOutlineArrowBackIos} from "react-icons/md";

const RegistrationPage = () => {
    return (
        <div className="w-screen h-screen justify-center items-center flex">
            <Link to={"/"} className="absolute top-5 left-5 flex items-center gap-x-2 mb-3 hover:text-myColor duration-200"><MdOutlineArrowBackIos
                className="pt-1"/>Назад</Link>
            <Layout logOrAuth="Auth"/>
        </div>
    );
};

export default RegistrationPage;
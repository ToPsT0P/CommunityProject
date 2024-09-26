import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../../widgets/Navbar/Navbar.tsx";

const UserPage = () => {
    //TODO Логика неверная, сначала загрузка ~> После отриска
    interface ICurrentUser {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string,

    }

    let currentUser: ICurrentUser
    const currentUserFetching = async () => {
        const id = window.location.pathname.split("/")[2]

        await axios.get(`https://reqres.in/api/users/${id}`)
            .then((res) => currentUser = res.data.data)
    }

    useEffect(() => {
        currentUserFetching()
    }, []);


    return (
        <div className="w-screen h-screen">
            <Navbar/>
            <div>
                <div>

                </div>
                <div>
                    <p>{currentUser.last_name}</p>
                    <p>adsdassd@asd.asd</p>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
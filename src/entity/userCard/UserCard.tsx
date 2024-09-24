import testIMG from "../../shared/img.png";

const UserCard = () => {
    return (
        <div className="w-80 h-64 flex shadow-2xl rounded-2xl p-5 flex-wrap justify-center">
            <div className="w-full flex justify-center flex-wrap">
                <img src={testIMG} className="rounded-full w-32 h-32" alt=""/>
                <h3 className="w-full text-center">Артур Королев</h3>
            </div>
            <div className="w-full flex justify-end">
                Like
            </div>
        </div>
    );
};

export default UserCard;
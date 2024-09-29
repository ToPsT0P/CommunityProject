import { Link } from "react-router-dom";

interface UserInterface {
    id: number;
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
}

interface UserCardProps {
    item: UserInterface;
}

const UserCard: React.FC<UserCardProps> = ({ item }) => {
    return (
        <Link to={`/CommunityProject/user/${item.id}`} className="w-80 h-64 flex shadow-2xl rounded-2xl p-5 flex-wrap justify-center cursor-pointer">
            <div className="w-full flex justify-center flex-wrap">
                <img src={item.avatar} className="rounded-full w-32 h-32" alt="User avatar"/>
                <h3 className="w-full text-center">{item.first_name} {item.last_name}</h3>
            </div>
        </Link>
    );
};

export default UserCard;

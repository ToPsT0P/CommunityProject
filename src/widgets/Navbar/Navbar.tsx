
const Navbar = () => {
    return (
        <div className="w-screen h-64 bg-myColor flex flex-wrap">
            <div className="w-screen px-8 py-3 h-fit flex justify-end">
                <button className="w-20 h-10 bg-myColor rounded-xl border-2 border-white text-white">Выход</button>
            </div>
            <div className="text-white flex flex-wrap justify-center pb-5">
                <h1 className="text-6xl w-full justify-center flex h-fit">Наша команда</h1>
                <h3 className="w-1/3 min-w-80 pt-3 flex text-center">Это опытные специалисты, хорошо разбирающиеся во
                    всех задачах,
                    которые ложатся на их плечи, и умеющие находить выход из любых,
                    даже самых сложных ситуаций. </h3>
            </div>
        </div>
    );
};

export default Navbar;
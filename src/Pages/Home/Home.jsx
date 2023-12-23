import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="">
            <div className="banner flex flex-col md:flex-row items-center py-10">
                <div className="space-y-4 pl-5">
                    <h1 className="text-5xl text-[#e14f42] font-semibold">SCC Technovision Task Manager</h1>
                    <p className="text-2xl">Your task management solution</p>
                    <Link className="px-4 inline-block py-2 w-fit rounded-full bg-gradient-to-br from-red-600 to-gray-600 hover:from-gray-600  hover:shadow-red-100 hover:shadow-md text-xl text-white mt-3" to="/login">
                        Let's Explore
                    </Link>
                </div>
                <img className="md:h-[400px]" src="https://i.ibb.co/7gLFkHY/scc-banner.gif" alt="" />
            </div>
            <div className="banner flex flex-col-reverse md:flex-row items-center py-10">
                <img className="md:h-[400px]" src="https://i.ibb.co/8XvkJ22/scc-about.gif" alt="" />
                <div className="space-y-4 pl-5">
                    <h1 className="text-5xl text-[#e14f42] font-semibold">Who can benefit from our platform?</h1>
                    <p className="text-2xl">Developers, corporate professionals, bankers, and more.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
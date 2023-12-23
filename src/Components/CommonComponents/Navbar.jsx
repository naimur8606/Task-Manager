import { Link, NavLink } from "react-router-dom";

const Navbar = ({ Outlet }) => {

    const navItems = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-red-500" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-red-500" : ""
                }
            >
                Dashboard
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "border-b-2 border-red-500" : ""
                }
            >
                Contact
            </NavLink>
        </li>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-200">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <img className="h-10" src="https://i.ibb.co/89CPDbT/scc-logo.png" alt="" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="flex space-x-5 text-xl mr-5">
                            {navItems}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                {Outlet}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="p-4 w-52 min-h-full bg-base-200 text-xl text-center space-y-3 font-medium">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
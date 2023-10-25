import { Link, NavLink } from "react-router-dom";
import driveNest from "../../public/DriveNest.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user.photoURL);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logged out Successfully'))
            .catch(error => {
                console.error(error);
            })
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addcar'>Add Car</NavLink></li>
        <li><NavLink to='/mycart'>My Cart</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a href="/"><img className="w-20" src={driveNest} alt="" /></a>
                <a className="text-xl font-extrabold" href="/">DriveNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex flex-col items-center mr-2">
                            <img src={user?.photoURL} alt="user Image" className="w-10 rounded-full" />
                            <span>{user.email}</span>
                        </div>
                        <a onClick={handleLogOut} className="btn btn-outline">Log Out</a>
                    </>
                        : <Link to='/login' className="btn btn-outline">LogIN</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;
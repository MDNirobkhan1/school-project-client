import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    const navOpctions = <>
        <Link to={"/"}><li><a>Home</a></li></Link>
        <Link to="/college"><li> <a>College</a></li></Link>
        <Link to="/addmission"><li><a>Addmission</a></li></Link>
        <Link to='/mycollege'><li><a>My College</a></li></Link>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOpctions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">College Booking</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOpctions}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn btn-primary">LogOut</button>
                        </> : <>
                            <Link to="/login"><button className="btn btn-success">Login</button></Link>
                        </>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;
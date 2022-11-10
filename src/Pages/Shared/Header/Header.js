import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo2 from "../../../images/randhan2.png";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
    </>
    const navItems2 = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/myreviews'>My Reviews</Link></li>
        <li><Link to='/'>Add Service</Link></li>
    </>

    return (
        <div className="navbar my-5 p-5 bg-fuchsia-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {
                            user?.uid ?
                                <>
                                    {navItems2}
                                </>
                                :
                                <>
                                    {navItems}
                                </>
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src={logo2} alt="" />
                    <p className='font-bold text-yellow-900'>Bengali Savory</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {
                        user?.uid ?
                            <>
                                {navItems2}
                            </>
                            :
                            <>
                                {navItems}
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <p className='text-black font-semibold p-2'>{user?.displayName}</p>
                            <button onClick={handleLogOut} className="btn btn-outline btn-primary">LogOut</button>
                        </>
                        :
                        <>
                            <Link to='/login' className="btn btn-primary">Login</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;
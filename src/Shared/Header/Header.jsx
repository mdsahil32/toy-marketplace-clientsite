import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => { console.log(error); })
    }

    return (
        <div className="md:mx-24">
            <div className="navbar bg-base-100 my-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-600 rounded-box w-52 h-80 text-white">
                            <ul className="menu menu-vertical px-1  gap-5">
                                <NavLink className='font-medium' to='/'>Home</NavLink>
                                <NavLink to='/allToys' className='font-medium' >All Toys</NavLink>
                                <NavLink to='/blog' className='font-medium' >Blog</NavLink>

                                {user ? <>
                                    <NavLink to='/addToys' className='font-medium' >Add Toys</NavLink>
                                    <NavLink  to='/myToys'  className='font-medium' >My Toys</NavLink>
                                    <button className='ml-4 font-medium' onClick={handleLogout}>Logout</button>
                                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                        <img className="w-1/4 rounded-full" src={user?.photoURL} alt="" />
                                    </div>
                                </>
                                    : <Link className='ml-4 font-medium' to='/login'>Login</Link>
                                }
                            </ul>
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="md:w-16 w-10 rounded-full" src='/public/vite.png' alt="" />
                        <h3 className="text-2xl md:font-semibold font-mono">KID HEROES</h3>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className=" navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <NavLink className='font-medium mt-3' to='/'>Home</NavLink>
                            <NavLink to='/allToys' className='font-medium mt-3' >All Toys</NavLink>
                            <NavLink to='/blog' className='font-medium mt-3' >Blog</NavLink>


                            {user ? <>
                                <NavLink to='/addToys' className='font-medium mt-3' >Add Toys</NavLink>
                                <NavLink to='/myToys' className='font-medium mt-3' >My Toys</NavLink>
                                <button className='md:ml-4 font-medium' onClick={handleLogout}>Logout</button>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className="w-1/2 rounded-full" src={user?.photoURL} alt="" />
                                </div>
                            </>
                                : <Link className='ml-4 font-medium mt-3' to='/login'>Login</Link>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
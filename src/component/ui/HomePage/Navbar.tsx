import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logout } from "../../../redux/features/api/endpoints/authSlice";
import toast from "react-hot-toast";


const Navbar = () => {
    const user = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        toast.success("Logged out successfully!");
        navigate("/login");
    };

    return (
        <nav className="sticky top-0 z-50 bg-primary shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar">
                <div className="flex-1 text-white">
                    <NavLink to={'/'} className="text-xl sm:text-2xl font-bold">
                        📚 BookShop
                    </NavLink>
                </div>

                <div className="flex-none">
                {/* Mobile Menu Button */}
                <div className="dropdown dropdown-end md:hidden ">
                    <label tabIndex={0} className="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul id="mainNavDropdown" tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}>Home</NavLink></li>
                        <li onClick={() => document.getElementById('mainNavDropdown')?.removeAttribute('open')}><NavLink to={'all-products'} className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}>Books</NavLink></li>
                        <li onClick={() => document.getElementById('mainNavDropdown')?.removeAttribute('open')}><NavLink to={'about'} className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}>About</NavLink></li>
                        <li onClick={() => document.getElementById('mainNavDropdown')?.removeAttribute('open')}><NavLink to={'contact'} className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}>Contact</NavLink></li>
                        {user?.role === 'admin' ? (
                            <li onClick={() => document.getElementById('mainNavDropdown')?.removeAttribute('open')}>
                                <NavLink to="/admin" className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}>Dashboard</NavLink>
                            </li>
                        ) : user?.role === 'user' ? (
                            <>
                                <li onClick={() => document.getElementById('mainNavDropdown')?.removeAttribute('open')}>
                                    <NavLink to="/user/orders" className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}>Orders</NavLink>
                                </li>
                                <li onClick={() => document.getElementById('mainNavDropdown')?.removeAttribute('open')}>
                                    <NavLink to="/user/edit-profile" className={({ isActive }) => isActive ? "text-gray-900 font-semibold" : ""}>Edit Profile</NavLink>
                                </li>
                            </>
                        ) : null}
                        {user ? (
                            <li onClick={() => {
                                document.getElementById('mainNavDropdown')?.removeAttribute('open');
                                handleLogout();
                            }}>
                                <NavLink to="">Logout</NavLink>
                            </li>
                        ) : (
                            <li onClick={() => document.getElementById('mainNavDropdown')?.removeAttribute('open')}>
                                <NavLink to="/login" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Login</NavLink>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Desktop Menu */}
                <ul className="menu menu-horizontal px-1 hidden md:flex items-center text-white">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Home</NavLink></li>
                    <li><NavLink to={'all-products'} className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Books</NavLink></li>
                    <li><NavLink to={'about'} className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>About</NavLink></li>
                    <li><NavLink to={'contact'} className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Contact</NavLink></li>
                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-outline btn-sm m-1">Profile</label>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                {
                                    user?.role == 'admin' ? (
                                        <li><NavLink to="/admin" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Dashboard</NavLink></li>
                                    ) : user?.role == 'user' ? (
                                        <>
                                            <li><NavLink to="/user/orders" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Orders</NavLink></li>
                                            <li><NavLink to="/user/edit-profile" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Edit Profile</NavLink></li>
                                        </>
                                    ) :
                                        null
                                }

                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <button className="btn btn-outline btn-sm"><NavLink to={'/login'} className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Login</NavLink></button>
                    )}
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
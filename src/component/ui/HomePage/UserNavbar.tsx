import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hook";
import { logout } from "../../../redux/features/api/endpoints/authSlice";


const UserNavbar = () => {
    // const user = useAppSelector((state) => state.auth.user);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("user");
        localStorage.removeItem("token");
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
            {/* Mobile Menu */}
            <div className="dropdown dropdown-end md:hidden">
              <label tabIndex={0} className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Home</NavLink></li>
                <li><NavLink to={'/all-products'} className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>Books</NavLink></li>
                <li><NavLink to="/user/orders" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>My Orders</NavLink></li>
                <li><NavLink to="/user/edit-profile" className={({ isActive }) => isActive ? "text-primary font-semibold" : ""}>My Profile</NavLink></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>

            {/* Desktop Menu */}
            <ul className="menu menu-horizontal px-1 hidden md:flex items-center text-white">
              <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Home</NavLink></li>
              <li><NavLink to={'/all-products'} className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>Books</NavLink></li>
              <li><NavLink to="/user/orders" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>My Orders</NavLink></li>
              <li><NavLink to="/user/edit-profile" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : ""}>My Profile</NavLink></li>
              <button className="btn btn-outline btn-sm ml-2" onClick={handleLogout}>Logout</button>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default UserNavbar;
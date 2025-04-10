import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar bg-base-100 shadow-md">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">📚 BookShop</a>
            </div>

            <div className="flex-none">
                {/* Mobile Menu Button */}
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><NavLink to={'/users/home'}>Home</NavLink></a></li>
                        <li><a><NavLink to={'/users/all-books'}>Books</NavLink></a></li>
                        <li><a><NavLink to={'about'}>About</NavLink></a></li>
                        <li><a><NavLink to={'contact'}>Contact</NavLink></a></li>
                        <button className="btn btn-outline btn-sm"><NavLink to={'/login'}>Login</NavLink></button>
                    </ul>
                </div>

                {/* Desktop Menu */}
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li><a><NavLink to={'/'}>Home</NavLink></a></li>
                    <li><a><NavLink to={'all-products'}>Books</NavLink></a></li>
                    <li><a><NavLink to={'about'}>About</NavLink></a></li>
                    <li><a><NavLink to={'contact'}>Contact</NavLink></a></li>
                    <button className="btn btn-outline btn-sm"><NavLink to={'/login'}>Login</NavLink></button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
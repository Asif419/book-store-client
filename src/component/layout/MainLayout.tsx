import { Outlet } from "react-router-dom"
import Footer from "../ui/HomePage/Footer"
import Navbar from "../ui/HomePage/Navbar"

const MainLayout = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar></Navbar>
            <Outlet />
            {/* Navbar */}
            <Footer></Footer>
        </>
    )
}

export default MainLayout
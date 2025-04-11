import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import AllProductsPage from "../pages/AllProductsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import BookDetailsPage from "../pages/BookDetailsPage";
import AdminLayout from "../component/layout/AdminLayout";
import CheckoutPage from "../pages/CheckoutPage";
import UserRoute from "./guards/userRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'all-products',
                element: <AllProductsPage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'profile',
                element: <ContactPage />
            },
            {
                path: 'book-details/:id',
                element: <BookDetailsPage />
            },
            {
                path: 'checkout/:id',
                element:
                    <UserRoute>
                        <CheckoutPage />
                    </UserRoute>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AboutPage />
            },
            {
                path: 'profile',
                element: <AllProductsPage />
            },
            {
                path: 'products',
                element: <ContactPage />
            },
            {
                path: 'users',
                element: <BookDetailsPage />
            }
        ]
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
]);

export default router;
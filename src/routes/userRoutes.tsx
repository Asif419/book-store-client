import About from '../pages/AboutPage';
import AllProductsPage from '../pages/AllProductsPage';
import Contact from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

export const userPaths = [
  {
    name: 'Homepage',
    path: 'homepage',
    element: <HomePage />,
  },
  {
    name: 'All Products',
    path: 'all-products',
    element: <AllProductsPage />,
  },
  {
    name: 'About',
    path: 'about',
    element: <About />,
  },
  {
    name: 'Contact',
    path: 'contact',
    element: <Contact />,
  },
];
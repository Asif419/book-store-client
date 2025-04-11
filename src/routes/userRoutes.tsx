import About from '../pages/About';
import AllProductsPage from '../pages/AllProductsPage';
import Contact from '../pages/Contact';
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
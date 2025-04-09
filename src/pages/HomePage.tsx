import Banner from "../component/ui/HomePage/Banner";
import FeaturedProducts from "../component/ui/HomePage/FeaturedProducts";
import Hero from "../component/ui/HomePage/Hero";
import Navbar from "../component/ui/HomePage/Navbar";

const HomePage = () => {
  return (
    <div className="space-y-12">

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <Hero></Hero>

      {/* Carousel Section */}
      <Banner></Banner>

      {/* Featured Books */}
      <FeaturedProducts></FeaturedProducts>

      {/* Footer */}
      <footer className="bg-base-200 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Book Shop. All rights reserved.
      </footer>
      <p className="text-center text-sm text-gray-500">Made with ❤️ by Your Team</p>
    </div>
  );
};

export default HomePage;
import Banner from "../component/ui/HomePage/Banner";
import FeaturedProducts from "../component/ui/HomePage/FeaturedProducts";
import Footer from "../component/ui/HomePage/Footer";
import Hero from "../component/ui/HomePage/Hero";
import Navbar from "../component/ui/HomePage/Navbar";
import Testimonials from "../component/ui/HomePage/Testimonials";

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

      {/* Testimonials */}
      <Testimonials></Testimonials>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
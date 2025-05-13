import Accordion from "../component/ui/HomePage/Accordion";
import FeaturedProducts from "../component/ui/HomePage/FeaturedProducts";
import Hero from "../component/ui/HomePage/Hero";
import Testimonials from "../component/ui/HomePage/Testimonials";
import HighlightSection from "./HighLightSection";
import NewsLetter from "./NewsLetter";
import TrustedBrandsBanner from "./TrustedBrandsBanner";

const HomePage = () => {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <Hero />

      {/* Featured Books */}
      <FeaturedProducts />

      {/* Newsletter Signup Section */}
      <NewsLetter></NewsLetter>

      {/* Testimonials */}
      <Testimonials></Testimonials>

      {/* Highlight Section */}
      <HighlightSection />


      {/* Trusted by Brands */}
      <TrustedBrandsBanner />

      {/* Accordion */}
      <Accordion />

    </div>
  );
};

export default HomePage;
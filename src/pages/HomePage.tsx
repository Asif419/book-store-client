import { useEffect } from "react";
import Accordion from "../component/ui/HomePage/Accordion";
import FeaturedProducts from "../component/ui/HomePage/FeaturedProducts";
import Hero from "../component/ui/HomePage/Hero";
import Testimonials from "../component/ui/HomePage/Testimonials";
import HighlightSection from "./HighLightSection";
import NewsLetter from "./NewsLetter";
import TrustedBrandsBanner from "./TrustedBrandsBanner";

const HomePage = () => {
  
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
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

      {/* Trusted by Brands */}
      <TrustedBrandsBanner />

      {/* Highlight Section */}
      <HighlightSection />

      {/* Accordion */}
      <Accordion />

    </div>
  );
};

export default HomePage;
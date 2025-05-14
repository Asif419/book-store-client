import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4 lg:py-12 space-y-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary mt-8 md:mt-0">About Us</h2>
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-base-200 rounded-lg">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">About BookShop</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            BookShop was built by a group of passionate readers, developers, and designers with one mission: to make discovering great books easier than ever. We aim to empower curious minds by providing easy access to the stories and ideas that shape the world.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://i.postimg.cc/vTSX53X1/temp-Image-UIqff-V.avif"
            alt="Team working"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="flex-1">
          <img
            src="https://i.postimg.cc/8zgM92Fp/temp-Image-WBahnw.avif"
            alt="Bookshelf inspiration"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Discover in Moments</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We know time is precious. That’s why BookShop helps you find powerful reads without wasting hours browsing. With curated collections and smart discovery tools, we turn idle moments into opportunities to learn, escape, and grow.
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/all-products">
          <button className="btn btn-primary rounded-2xl">Explore Our Collection</button>
        </Link>
      </div>
    </section>
  );
};

export default AboutPage;
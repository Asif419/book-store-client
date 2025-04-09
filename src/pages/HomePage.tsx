import Banner from "../component/ui/HomePage/Banner";
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
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Replace with BookCard component later */}
          <div className="card bg-base-100 shadow-md p-4">Book 1</div>
          <div className="card bg-base-100 shadow-md p-4">Book 2</div>
          <div className="card bg-base-100 shadow-md p-4">Book 3</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-200 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Book Shop. All rights reserved.
      </footer>
      <p className="text-center text-sm text-gray-500">Made with ❤️ by Your Team</p>
    </div>
  );
};

export default HomePage;
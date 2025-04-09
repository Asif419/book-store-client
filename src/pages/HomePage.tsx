const HomePage = () => {
  return (
    <div className="space-y-12">

      {/* Navbar */}
      <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">📚 BookShop</a>
        </div>
        <div className="flex-none gap-4">
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li><a>Home</a></li>
            <li><a>Books</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <button className="btn btn-outline btn-sm">Login</button>
          </ul>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 bg-base-200">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Book Shop 📚</h1>
        <p className="text-lg mb-6">Your favorite place to discover and share books.</p>
        <button className="btn btn-primary">Browse Books</button>
      </section>

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
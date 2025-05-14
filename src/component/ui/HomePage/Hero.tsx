import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className="hero py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.postimg.cc/sD7ZYTTt/temp-Image-MYg-U8-H.avif"
            alt="Bookshelf"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary">Welcome to Book Shop 📚</h1>
            <p className="py-6 text-lg">
              Discover, share, and explore your favorite books all in one place. Whether you're into thrilling mysteries, heartwarming tales, or insightful nonfiction, we’ve got something for every reader. Join a community of book lovers and start your literary journey today.
            </p>
            <Link to="/all-products">
              <button className="btn btn-primary rounded-2xl">Browse Books</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
const NewsLetter = () => {
  return (
    <section className="bg-base-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Stay updated with the latest book releases, deals, and reading tips delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:w-2/3"
          />
          <button type="submit" className="btn btn-primary w-full sm:w-auto rounded-2xl">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
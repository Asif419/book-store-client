import { Link, useNavigate } from "react-router-dom";
import { useGetBooksQuery } from "../../../redux/features/api/endpoints/bookApi";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const { data: response, isLoading, isError } = useGetBooksQuery();
  const featuredBooks = response?.data?.slice(0, 8) ?? [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) return <p>Failed to load books.</p>;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center pb-12">Featured Products</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {featuredBooks.map((book: any, index: number) => (
          <div
            key={book.id}
            className={`bg-gray-200 rounded-xl shadow-2xl flex overflow-hidden w-full sm:w-[48%] lg:w-[23%] ${index > 3 ? "hidden sm:flex" : ""
              }`}
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-24 object-cover text-center h-full"
            />
            <div className="flex flex-col justify-between py-2 px-4 flex-1">
              <div>
                <h3 className="text-md font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <p className="text-sm text-gray-600 mt-1">Category: {book.category}</p>
                {/* <p className="text-sm text-gray-600">Price: ${book.price}</p> */}
              </div>
              <div className="mt-4 text-right">
                <button onClick={() => navigate(`book-details/${book._id}`)} className="btn btn-outline btn-sm rounded-2xl">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center mb-6">
        <Link to="/all-products">
          <button className="btn btn-primary mt-5 rounded-2xl">View All</button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
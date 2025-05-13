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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link to="/all-products">
          <button className="btn btn-primary btn-sm">View All</button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {featuredBooks.map((book: any, index: number) => (
          <div
            key={book.id}
            className={`flex bg-base-100 shadow-md rounded-lg overflow-hidden w-full sm:w-[48%] lg:w-[23%] ${index > 3 ? "hidden sm:flex" : ""
              }`}
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-24 h-32 object-cover"
            />
            <div className="flex flex-col justify-between p-4 flex-1">
              <div>
                <h3 className="text-md font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <p className="text-sm text-gray-600 mt-1">Category: {book.genre}</p>
                <p className="text-sm text-gray-600">Price: ${book.price}</p>
              </div>
              <div className="mt-4 text-right">
                <button onClick={() => navigate(`book-details/${book._id}`)} className="btn btn-outline btn-sm">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
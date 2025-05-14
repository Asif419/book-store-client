import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/features/api/endpoints/bookApi";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useEffect } from "react";

const BookDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);
  const user = useAppSelector((state) => state.auth.user);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError || !book) return <p className="text-center py-10 text-error">Failed to load book.</p>;


  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10 bg-gray-200 p-8 rounded-4xl shadow-2xl">
        {/* Book Cover */}
        <div className="w-full md:w-1/3">
          <img
            src={book.data.cover}
            alt={book.data.title}
            className="w-full h-auto rounded shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="w-full md:w-2/3 space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-row items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">{book.data.title}</h1>
                <h2 className="text-xl text-gray-600">by {book.data.author}</h2>
                <p className="pb-1 text-sm mt-2"><strong>Product ID:</strong> {book.data._id}</p>
              </div>
              <div>
                <p className="pb-1 font-bold">{book.data.category}</p>
                <p className="pb-1">{book.data.inStock ? "In Stock" : "Out of Stock"}</p>
              </div>
            </div>
            <div className="my-4">
              <p className="text-base text-gray-700">{book.data.description || "No description available."}</p></div>
          </div>

          <div className="flex items-center justify-between">

            <div className="py-8 text-sm text-gray-700">
              <p className="text-2xl text-green-700 font-bold">${book.data.price}</p>
              <p className="pb-1">{book.data.quantity} pics available</p>
            </div>
            <button
              className="btn btn-primary rounded-2xl"
              disabled={!book.data.inStock || user?.role !== "user"}
              onClick={() => {
                navigate(`/user/checkout/${book.data._id}`);
              }}
            >
              {user?.role !== "user"
                ? "User can order"
                : book.data.inStock
                  ? "Buy Now"
                  : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
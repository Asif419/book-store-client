import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../../redux/features/api/apiSlice";

const FeaturedProducts = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  console.log(books)
if (isLoading) return <p>Loading...</p>;
if (isError) return <p>Failed to load books.</p>;

  // Dummy data for now
  const featuredBooks = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    cover: `/images/book-${i + 1}.jpg`, 
  }));

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link to="/all-products">
          <button className="btn btn-outline btn-sm">View All</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredBooks.map((book) => (
          <div key={book.id} className="card bg-base-100 shadow-md">
            <figure>
              <img
                src={book.cover}
                alt={book.title}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
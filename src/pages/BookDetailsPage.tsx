import { useParams } from "react-router-dom";
import { useGetBookByIdQuery } from "../redux/features/api/endpoints/bookApi";

const BookDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book, isLoading, isError } = useGetBookByIdQuery(id);
  console.log(book)

  if (isLoading) return <p className="text-center py-10">Loading book details...</p>;
  if (isError || !book) return <p className="text-center py-10 text-error">Failed to load book.</p>;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={book.data.cover}
            alt={book.data.title}
            className="w-full h-auto rounded shadow"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.data.title}</h1>
          <h2 className="text-xl text-gray-600 mb-4">by {book.data.author}</h2>
          <p className="text-base text-gray-700 mb-6">{book.data.description || "No description available."}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
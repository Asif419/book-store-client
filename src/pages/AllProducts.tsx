import { useEffect, useState } from "react";
import { TProduct } from "../components/ProductCard";
import FilteringSideBar from "../components/FilteringSideBar";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  setAuthor,
  setCategory,
  setSearchTerm,
  setTitle,
} from "../redux/features/api/filterSlice";
import { useGetAllProductsQuery } from "../redux/features/api/endpoints/productApi";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [searchValue, setSearchValue] = useState("");

  const filter = useAppSelector((store) => store.filter);

  const { data, isError, isLoading } = useGetAllProductsQuery(filter, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    dispatch(setSearchTerm(searchValue));
    dispatch(setTitle(""));
    dispatch(setAuthor(""));
    dispatch(setCategory(""));
  };

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        All Books – Explore Our Collection
      </h1>
      <p className="text-sm md:text-base lg:text-lg md:mt-2 w-full text-center">
        Discover a wide range of books across genres including fiction,
        non-fiction, romance, mystery, and more. Find your next great read and
        enjoy the magic of stories!
      </p>
      <div className="flex justify-center items-center mt-4 md:mt-6 lg:mt-8">
        <div className="join items-center mb-5">
          <div>
            <div>
              <input
                className="input join-item w-52"
                placeholder="Search here"
                name="search"
                id="search"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          <div className="indicator">
            <button onClick={handleSearch} className="btn btn-primary join-item">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 py-6">
        <div className="md:w-1/4 hidden md:block">
          <div className="bg-base-100 border border-base-300 rounded-xl shadow-md p-6 space-y-6 sticky top-24">
            <FilteringSideBar />
          </div>
        </div>
        <div className="md:w-3/4 w-full">
          {isLoading && (
            <div className="min-h-96 flex justify-center items-center">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          )}

          {!isLoading && data.data?.length > 0 && (
            <div className="flex flex-wrap gap-6 justify-center">
              {data.data.map((book: TProduct) => (
                <div
                  key={book._id}
                  className="flex bg-gray-200 shadow-2xl rounded-xl overflow-hidden w-full sm:w-full md:w-[48%]"
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-24 h-full object-cover"
                  />
                  <div className="flex flex-col justify-between p-4 flex-1">
                    <div className="flex flex-row items-center justify-between">
                      <div>
                        <h3 className="text-md font-semibold">{book.title}</h3>
                        <p className="text-sm text-gray-500">by {book.author}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mt-1 font-bold">{book.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-4 text-right">
                      <div>
                        <p className="text-sm text-gray-600 font-semibold">${book.price}</p>
                      </div>
                      <button onClick={() => navigate(`/book-details/${book._id}`)} className="btn btn-outline btn-sm">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && data.data?.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No books found.</p>
          )}

          {isError && (
            <p className="text-center text-gray-500 mt-8">
              Something Went Wrong.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

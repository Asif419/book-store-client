import ProductListCard, {
  TListProduct,
} from "../component/ui/AdminDashboard/ProductListCard";
import { useGetAllProductsQuery } from "../redux/features/api/endpoints/productApi";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useGetAllProductsQuery(
    {},
    {
      pollingInterval: 30000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
    }
  );


  // handle add book

  return (
    <div className="y-1 md:py-4 lg:py-12 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-4">
        📦 Manage Products
      </h1>
      <div className="flex justify-end px-4 mb-6">
        <div className="flex justify-end px-4 mb-6">
          <Link to="/admin/add-book" className="btn btn-primary rounded-2xl">
            Add Book
          </Link>
        </div>
      </div>
      <div>
        {isLoading && (
          <div className="h-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        )}
        {isError && (
          <div className="py-4 md:py-6">
            <p className="text-red-500">
              Something Went Wrong, Try again later.
            </p>
          </div>
        )}

        {!isLoading && products.data.length < 0 && (
          <div className="py-4 md:py-6">
            <p>No Orders Placed at this moment!</p>
          </div>
        )}
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {!isLoading &&
            products.data.map((product: TListProduct) => (
              <ProductListCard
                key={product._id}
                product={product}
              ></ProductListCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

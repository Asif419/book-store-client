import OrderList from "../component/ui/AdminDashboard/OrderList";
import { useGetAllOrdersQuery } from "../redux/features/api/endpoints/orderApi";

const ProductsPage = () => {
  const {
    data: orders,
    isLoading,
    isError,
  } = useGetAllOrdersQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  return (
    <div className="pt-4 md:pt-6 lg:pt-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-4">
        📦 Manage Products
      </h1>
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

        {!isLoading && orders.data.length < 0 && (
          <div className="py-4 md:py-6">
            <p>No Orders Placed at this moment!</p>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
          {!isLoading &&
            orders.data.map((order) => (
              <OrderList key={order._id} order={order}></OrderList>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

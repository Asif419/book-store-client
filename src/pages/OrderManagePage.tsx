import OrderListCard, {
  TOrder,
} from "../component/ui/AdminDashboard/OrderListCard";
import { useGetAllOrdersQuery } from "../redux/features/api/endpoints/orderApi";

const OrderManagePage = () => {
  const { data, isError, isLoading } = useGetAllOrdersQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  return (
    <div className="mx-auto px-4 y-1 md:py-4 lg:py-12">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        Order Management
      </h1>
      <div className="py-6 lg:py-8">
        {/* is lading state */}
        {isLoading && (
          <div className="min-h-96 flex justify-center items-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        )}
        {/* if data available */}
        {!isLoading && data?.data?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.data.map((order: TOrder) => (
              <OrderListCard key={order._id} order={order}></OrderListCard>
            ))}
          </div>
        )}
        {/* if error */}
        {isError && (
          <p className="text-red-500">
            Something Went Wrong ! Can't load orders at this moment.
          </p>
        )}
        {!isLoading && data?.data?.length <= 0 && (
          <p className="text-yellow-500">No Order available right now.</p>
        )}
      </div>
    </div>
  );
};

export default OrderManagePage;

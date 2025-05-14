import UserManagementCard, {
  TUser,
} from "../component/ui/AdminDashboard/UserManagementCard";
import { useGetAllUserQuery } from "../redux/features/api/endpoints/userApi";

const UserManagement = () => {
  const { data, isLoading, isError } = useGetAllUserQuery(undefined, {
    pollingInterval: 300000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  return (
    <div className="mx-auto px-4y-1 md:py-4 lg:py-12">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center py-4 mb-8">
        User Management
      </h1>

      {/* is lading state */}
      {isLoading && (
        <div className="min-h-96 flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      )}
      {/* if data available */}
      {!isLoading && data.data?.length > 0 && (
        <div className="px-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {data.data.map((user: TUser) => (
            <UserManagementCard key={user._id} user={user} />
          ))}
        </div>
      )}
      <div>
        {/* is no data found */}
        {!isLoading && data.data?.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No books found.</p>
        )}
      </div>
      {/* isError state */}
      {isError && data.data?.length === 0 && (
        <p className="text-center text-gray-500 mt-8">Something Went Wrong.</p>
      )}
    </div>
  );
};

export default UserManagement;

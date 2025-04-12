import Swal from "sweetalert2";
import {
  useBlockUserMutation,
  useGetAllUserQuery,
} from "../redux/features/api/endpoints/userApi";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const UserManagement = () => {
  const { data, isLoading, isError } = useGetAllUserQuery(undefined, {
    pollingInterval: 300000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [blockUser] = useBlockUserMutation();

  const handleDeactivateUser = async (id: string) => {
    if (!data?.data?.isBlocked) {
      Swal.fire({
        title: `Do you want to Deactivate ${name}'s account?`,
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await blockUser(id);
          console.log(res);
          if (res.data.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been blocked.",
              icon: "success",
            });
          }
        }
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
        User management
      </h1>

      {/* is lading state */}
      {isLoading && (
        <div className="min-h-96 flex justify-center items-center">
          <span className="loading loading-spinner loading-xl"></span>
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
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto text-sm text-left text-gray-300">
          <thead className="bg-gray-700 text-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Block User</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((user) => (
              <tr key={user.id} className="border-b border-gray-700">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm font-semibold
              ${
                user.isBlocked === false
                  ? "bg-green-600 text-white"
                  : user.isBlocked === true
                  ? "bg-red-600 text-white"
                  : "bg-yellow-500 text-black"
              }`}
                  >
                    {user?.isBlocked === false ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDeactivateUser(user._id)}
                    disabled={user?.isBlocked}
                    className={`px-2 py-1 rounded text-sm font-semibold
              ${
                user.isBlocked === false
                  ? "bg-green-600 text-white"
                  : user.isBlocked === true
                  ? "bg-red-600 text-white"
                  : "bg-yellow-500 text-black"
              }`}
                  >
                    {user?.isBlocked === false ? "Active" : "Inactive"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;

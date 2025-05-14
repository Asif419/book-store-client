import Swal from "sweetalert2";
import { useBlockUserMutation } from "../../../redux/features/api/endpoints/userApi";

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin"; // Add other roles if needed
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const UserManagementCard = ({ user }: { user: TUser }) => {
  const { _id, email, name, isBlocked, role } = user;

  const [blockUser] = useBlockUserMutation();

  const handleDeactivateUser = async (id: string) => {
    if (!isBlocked) {
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
    <div>
      <div className="bg-gray-200 shadow-sm rounded-2xl p-8 h-full flex flex-col justify-between">
        <div className="items-center text-center">
          <h2 className="text-lg text-primary font-bold">{name}</h2>
          <p className="text-sm mb-4">{`(${role})`}</p>
          <p>{email}</p>
          <p>{isBlocked ? "Blocked" : "Active"}</p>
        </div>
        <div className="mt-4 text-center mx-auto">
          <button
            onClick={() => handleDeactivateUser(_id)}
            className="btn btn-sm rounded-2xl btn-outline"
            disabled={isBlocked}
          >
            Deactivate
          </button>
        </div>
      </div>
    </div >
  );
};

export default UserManagementCard;

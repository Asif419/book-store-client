import { toast } from "react-hot-toast";
import { useAppSelector } from "../../../redux/hook";
import { useResetPasswordMutation } from "../../../redux/features/api/endpoints/userApi";

const UserProfile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const handleResetPassword = async () => {
    try {
      const res = await resetPassword({ email: user?.email }).unwrap();
      toast.success(res.message || "Password reset link sent!");
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to send reset email.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-base-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">👤 Profile Information</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
      </div>

      <button
        onClick={handleResetPassword}
        className="btn btn-primary mt-6"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Reset Password"}
      </button>
    </div>
  );
};

export default UserProfile;
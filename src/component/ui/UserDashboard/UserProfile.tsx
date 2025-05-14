import { toast } from "react-hot-toast";
import { useAppSelector } from "../../../redux/hook";
import { useResetPasswordMutation } from "../../../redux/features/api/endpoints/userApi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserProfile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const handleResetPassword = async () => {
    try {
      const res = await resetPassword({ email: user?.email }).unwrap();
      toast.success(res.message || "Password reset link sent!");
    } catch (err: any) {
      toast.error(err.data?.message || "Failed to send reset email.");
    }
  };

  console.log(handleResetPassword)

  const handleResetRedirect = () => {
    navigate("/user/reset-password");
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/HfVwGR74/cover.jpg')" }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Personal Info */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md flex items-center gap-6">
            <img
              src="https://i.ibb.co/XrYKnbtB/profile.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <div>
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <p className="text-sm text-gray-600">{user?.email}</p>
              <p className="text-sm font-medium mt-1">+880 1234-567890</p>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-4">Account Details</h3>
            <p><span className="text-gray-500">Account Created:</span> Jan 2023</p>
            <p><span className="text-gray-500">Order History:</span> <strong>12 items</strong></p>
            <p><span className="text-gray-500">Password Last Changed:</span> <strong>3 months ago</strong></p>
          </div>

          {/* Shipping Address */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md">
            <h3 className="text-md font-semibold mb-4">Shipping Address</h3>
            <p><span className="text-gray-500">Address:</span> 123/A, Dhaka</p>
            <p><span className="text-gray-500">City:</span> Dhaka</p>
            <p><span className="text-gray-500">Country:</span> Bangladesh</p>
          </div>

          {/* Payment Method */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-md font-semibold mb-4">Payment Method</h3>
              <p><span className="text-gray-500">Card Type:</span> VISA</p>
              <p><span className="text-gray-500">Balance:</span> $1,000</p>
            </div>
          </div>
        </div>

        <div className="text-right mt-10">
          <button className="btn btn-primary rounded-2xl" onClick={handleResetRedirect}>
            🔒 Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
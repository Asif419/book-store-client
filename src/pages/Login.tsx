import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/api/endpoints/authApi";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hook";
import { setUser } from "../redux/features/api/endpoints/authSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  type LoginFormValues = {
    email: string;
    password: string;
  };


  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormValues>();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const onSubmit = async (formData: LoginFormValues) => {
    try {
      const res = await login(formData).unwrap();

      dispatch(setUser({
        user: res?.data?.verifiedUser,
        token: res?.data?.token,
      }));

      localStorage.setItem("user", JSON.stringify(res.data.verifiedUser));
      localStorage.setItem('token', res.data.token);


      toast.success("Logged in successfully!");
      navigate('/');
    } catch (error: any) {
      const message = error?.data?.message || "Login failed. Please try again.";
      setLoginError(message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md dark:bg-base-100 p-8 shadow-lg border-0.5 bg-gray-100 rounded-4xl space-y-6">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-center text-primary">Welcome Back</h2>
          </div>
          <div>
            <Link to="/" className="link link-hover">🏠 Back to Home</Link>
          </div>
        </div>
        <div>
        </div>

        {/* Credential Buttons */}
        <div className="flex justify-center gap-2">
          <button
            type="button"
            className="btn btn-outline btn-sm rounded-t-3xl w-1/3 rounded-2xl"
            onClick={() => {
              setValue("email", "team2@gmail.com");
              setValue("password", "72423855");
            }}
          >
            Admin Login
          </button>
          <button
            type="button"
            className="btn btn-outline btn-sm rounded-b-3xl w-1/3"
            onClick={() => {
              setValue("email", "asif419@gmail.com");
              setValue("password", "123456");
            }}
          >
            User Login
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className="text-error text-sm">{errors.password.message}</p>}

          <button type="submit" className="btn btn-primary justify-center rounded-2xl">Login</button>
          {loginError && (
            <div className="text-error bg-base-200 p-2 text-sm rounded">
              {loginError}
            </div>
          )}
        </form>

        <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-500">
          <Link to="/register" className="link link-hover">➕ Create Account</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

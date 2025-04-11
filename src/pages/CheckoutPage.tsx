import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useState } from "react";
import { useGetBookByIdQuery } from "../redux/features/api/endpoints/bookApi";
import { toast } from "react-hot-toast";
import { usePlaceOrderMutation } from "../redux/features/api/endpoints/orderApi";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: book, isLoading } = useGetBookByIdQuery(id);
  const [placeOrder] = usePlaceOrderMutation();
  const user = useAppSelector((state) => state.auth.user);

  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!book || !user) {
    return <p className="text-center py-10">Invalid access. No product or user info found.</p>;
  }

  const totalPrice = (quantity * book.data.price).toFixed(2);

  const handleOrder = () => {
    try {
      const res = placeOrder({ productId: book.data._id, quantity }).unwrap();
      toast.success("Order placed successfully!");
      navigate("/");
    } catch (err: any) {
      console.error("Order failed:", err);
      toast.error(err?.data?.message || "Failed to place order.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="bg-base-200 p-4 rounded mb-6 text-center">
        <h3 className="text-xl font-semibold">{book.data.title}</h3>
        <p className="text-sm">Price: ${book.data.price}</p>
        <p className="text-sm">In Stock: {book.data.inStock ? book.data.quantity : 0}</p>
      </div>

      <div className="bg-base-200 text-center p-4 rounded mb-6">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <div className="space-y-4 text-center">
        <label className="form-control w-full max-w-xs">
          <div className="label mr-3"><span className="label-text">Quantity</span></div>
          <input
            type="number"
            min={1}
            max={book.data.quantity}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-4/12 md:w-2/12 max-w-xs"
          />
        </label>

        <p className="text-lg mt-5">Total: <strong>${totalPrice}</strong></p>

        <div className="bg-base-100 p-4 border rounded mb-6 text-center max-w-md mx-auto">
          <h4 className="font-semibold mb-2">Payment Method</h4>
          <p className="text-sm text-gray-500">SurjoPay integration goes here...</p>
        </div>

        {/* Order Button */}
        <div className="text-center">
          <button
            className="btn btn-primary px-10"
            disabled={
              quantity > book.data.quantity || !book.data.inStock || user.role !== "user"
            }
            onClick={handleOrder}
          >
            {user.role !== "user" ? "Only Users Can Order" : "Order Now"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
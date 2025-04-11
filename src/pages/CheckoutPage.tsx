import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useState } from "react";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const user = useAppSelector((state) => state.auth.user);
  console.log(user)
  const [quantity, setQuantity] = useState(1);

  if (!product || !user) {
    return <p className="text-center py-10">Invalid access. No product or user info found.</p>;
  }

  const totalPrice = (quantity * product.price).toFixed(2);

  const handleOrder = () => {
    // Later: Integrate with order API + SurjoPay
    alert("Order placed successfully (mock)!");
    navigate("/"); // Redirect to home or success page
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      <div className="bg-base-200 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold">{product.title}</h3>
        <p className="text-sm">Price: ${product.price}</p>
        <p className="text-sm">In Stock: {product.inStock ? product.quantity : 0}</p>
      </div>

      <div className="bg-base-200 p-4 rounded mb-6">
        <p><strong>Name:</strong> {}</p>
        <p><strong>Email:</strong> {}</p>
        <p><strong>Role:</strong> {}</p>
      </div>

      <div className="space-y-4">
        <label className="form-control w-full max-w-xs">
          <div className="label"><span className="label-text">Quantity</span></div>
          <input
            type="number"
            min={1}
            max={product.quantity}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <p className="text-lg">Total: <strong>${totalPrice}</strong></p>

        <div className="bg-base-100 p-4 border rounded">
          <h4 className="font-semibold mb-2">Payment Method</h4>
          <p>SurjoPay integration placeholder...</p>
        </div>

        {/* <button
          className="btn btn-primary"
          disabled={
            quantity > product.quantity || !product.inStock || user.role !== "user"
          }
          onClick={handleOrder}
        >
          {user.role !== "user" ? "Only Users Can Order" : "Order Now"}
        </button> */}
      </div>
    </section>
  );
};

export default CheckoutPage;
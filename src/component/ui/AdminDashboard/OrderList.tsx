import { MdOutlineDelete, MdOutlineSecurityUpdate } from "react-icons/md";

export type TOrder = {
  _id: string;
  email: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled"; // adjust based on actual values
  transaction: {
    id: string;
    transactionStatus: "Initiated" | "Success" | "Failed"; // adjust based on actual values
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const OrderList = ({ order }: { order: TOrder }) => {
  const { email, productId, quantity, totalPrice, status } = order;
  return (
    <div className="card bg-neutral text-neutral-content w-full">
      <div className="card-body items-start text-center">
        <h2 className="card-title mx-auto">👤{email}</h2>
        <p className="text-sm md:text-base">Product Id : {productId}</p>
        <p className="text-sm md:text-base">Quantity : {quantity}</p>
        <p className="text-sm md:text-base">Total Price : {totalPrice}</p>
        <p className="text-sm md:text-base">Status : {status}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost text-yellow-500 border-t-2 border-blue-400">
            Update <MdOutlineSecurityUpdate />
          </button>
          <button className="btn btn-ghost text-red-500 border-t-2 border-blue-400">
            Delete <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

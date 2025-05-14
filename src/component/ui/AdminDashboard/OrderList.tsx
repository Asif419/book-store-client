import { MdOutlineDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import { useDeleteOrderMutation } from "../../../redux/features/api/endpoints/orderApi";
import toast from "react-hot-toast";

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
  const { _id, email, productId, quantity, totalPrice, status } = order;

  const [deleteOrder] = useDeleteOrderMutation();

  const handleDelete = async (id: string) => {
    const res = await deleteOrder(id).unwrap();
    if (res.status) {
      toast.success(`${res?.data?._id} order has been deleted!`);
    } else {
      toast.error("Order Cannot be deleted right now.");
    }
  };

  return (
    <div className="bg-base-100 border border-base-300 rounded-lg shadow-sm p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-gray-500">Customer Email</p>
          <p className="font-semibold">{email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Product ID</p>
          <p className="font-medium break-all">{productId}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Order Status</p>
          <p className={`font-semibold ${status === "Completed" ? "text-green-600" : status === "Cancelled" ? "text-red-600" : "text-yellow-600"}`}>
            {status}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Quantity</p>
          <p className="font-medium">{quantity}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Price</p>
          <p className="font-semibold text-primary">${totalPrice}</p>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        {/* Update button */}
        <label htmlFor="my_modal_7" className="btn btn-sm btn-outline btn-warning">
          <MdOutlineSecurityUpdate className="mr-1" /> Update
        </label>

        {/* Modal */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Update Order</h3>
            <p className="py-4">This modal will be used to update order status.</p>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>

        {/* Delete button */}
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-outline btn-error"
        >
          <MdOutlineDelete className="mr-1" /> Delete
        </button>
      </div>
    </div>
  );
};

export default OrderList;

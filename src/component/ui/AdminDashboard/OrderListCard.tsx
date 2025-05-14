import { MdOutlineDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import {
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} from "../../../redux/features/api/endpoints/orderApi";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { SubmitHandler, useForm } from "react-hook-form";

export type TTransaction = {
  id: string;
  transactionStatus: "Initiated" | "Success" | "Failed";
  bank_status: string;
  date_time: string;
  method: string;
  sp_code: string;
  sp_message: string;
};

export type TOrder = {
  _id: string;
  email: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: "Paid" | "Pending" | "Cancelled" | "Completed" | "Shipped";
  transaction: TTransaction;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const OrderListCard = ({ order }: { order: TOrder }) => {
  const { _id, email, productId, quantity, totalPrice, status, transaction } =
    order;
  const [deleteOrder] = useDeleteOrderMutation();
  const [updateOrder] = useUpdateOrderMutation();

  const { register, handleSubmit, reset } = useForm<Partial<TOrder>>({
    defaultValues: {
      email,
      productId,
      quantity,
      totalPrice,
      status,
    },
  });

  const onSubmit: SubmitHandler<Partial<TOrder>> = async (data) => {
    console.log(_id, data);
    const parsedData = {
      ...data,
      quantity: Number(data.quantity),
      totalPrice: Number(data.totalPrice),
      transaction,
    };
    const res = await updateOrder({ id: _id, ...parsedData });
    if (res?.data?.success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${productId} successfully updated.`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteOrder(id).unwrap();
        if (res.success) {
          Swal.fire({
            title: "Deleted!",
            text: `${res?.data?.productId} has been deleted!`,
            icon: "success",
          });
        } else {
          toast.error(`${productId} can't be deleted right now!`);
        }
      }
    });
  };
  return (
    <>
      <div className="bg-gray-200 border border-base-300 rounded-4xl shadow-sm p-8 w-full h-full flex flex-col justify-between">
        <p className="text-center mx-auto w-1/2 md:w-full text-sm font-bold text-primary mb-6 border-1 rounded-2xl p-[2px]"> {status}</p>
        <h2 className="text-sm font-bold">{productId}</h2>
        <p className="text-sm text-gray-600 mb-4"> {email}</p>
        <p className="text-sm font-semibold text-gray-600"><span className="font-semibold">Quantity:</span> {quantity}</p>
        <p className="text-sm text-gray-600 font-bold"><span className="font-semibold">Total Price:</span> ${totalPrice}</p>

        <div className="flex justify-center items-center gap-4 mt-8">
          <label htmlFor="my_modal_7" className="btn btn-sm btn-outline rounded-2xl text-yellow-600">
            <MdOutlineSecurityUpdate className="text-lg" /> Update
          </label>
          <button onClick={() => handleDelete(_id)} className="btn btn-sm rounded-2xl btn-outline text-red-600">
            <MdOutlineDelete className="text-lg" /> Delete
          </button>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="hero bg-base-200">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
              <h3 className="text-lg md:text-xl font-semibold text-center">
                Update Order
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    className="input w-full bg-base-200"
                    placeholder="Email"
                    {...register("email")}
                    readOnly
                  />
                  <label className="fieldset-label">ProductId</label>
                  <input
                    type="text"
                    className="input w-full bg-base-200"
                    placeholder="ProductId"
                    {...register("productId")}
                    readOnly
                  />
                  <label className="fieldset-label">Quantity</label>
                  <input
                    type="number"
                    className="input w-full bg-base-200"
                    placeholder="Quantity"
                    {...register("quantity", {
                      valueAsNumber: true,
                      min: 1,
                    })}
                    readOnly
                  />
                  <label className="fieldset-label">Total Price</label>
                  <input
                    type="number"
                    step="any"
                    className="input w-full bg-base-200"
                    placeholder="Total Price"
                    {...register("totalPrice", {
                      valueAsNumber: true,
                      min: 0,
                    })}
                    readOnly
                  />
                  <label className="fieldset-label">Status</label>
                  <select
                    defaultValue="Pick a color"
                    className="select w-full"
                    {...register("status")}
                  >
                    <option disabled={true}>Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="shipped">Shipped</option>
                  </select>
                  <button className="btn btn-sm btn-primary rounded-2xl mt-4 w-full">
                    Update Order
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default OrderListCard;

import { MdOutlineDelete, MdOutlineSecurityUpdate } from "react-icons/md";
import { useDeleteProductMutation } from "../../../redux/features/api/endpoints/productApi";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export type TListProduct = {
  _id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  inStock: boolean;
};

const ProductListCard = ({ product }: { product: TListProduct }) => {
  const { _id, title, author, category, price, inStock } = product;

  const [deleteProduct] = useDeleteProductMutation();
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
        const res = await deleteProduct(id).unwrap();
        if (res.success) {
          Swal.fire({
            title: "Deleted!",
            text: `${res?.data?.title} has been deleted!`,
            icon: "success",
          });
        } else {
          toast.error(`${title} can't be deleted right now!`);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="card bg-neutral text-neutral-content w-full">
      <div className="card-body items-start text-center">
        <h2 className="card-title mx-auto">{title}</h2>
        <p className="text-sm md:text-base">Author : {author}</p>
        <p className="text-sm md:text-base">Price : {price}</p>
        <p className="text-sm md:text-base">Category : {category}</p>
        <p className="text-sm md:text-base">
          Available : {inStock ? "yes" : "no"}
        </p>
        <div className="card-actions justify-end">
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className="btn btn-ghost text-yellow-500 border-t-2 border-violet-400"
          >
            Update <MdOutlineSecurityUpdate />
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Hello!</h3>
              <p className="py-4">This modal works with a hidden checkbox!</p>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost text-red-500 border-t-2 border-violet-400"
          >
            Delete <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListCard;

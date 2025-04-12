import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAddBookByAdminMutation } from "../redux/features/api/endpoints/productApi";

const AddBookPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    description: "",
    quantity: "",
    cover: "",
    inStock: true,
  });

  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookByAdminMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const newValue =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = { ...formData, price: parseFloat(formData.price), quantity: parseInt(formData.quantity) };
      console.log(payload)
      await addBook(payload).unwrap();
      toast.success("Book added successfully!");
      navigate("/admin"); // or wherever you want to go back
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to add book.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">📘 Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="input input-bordered w-full" required />
        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="input input-bordered w-full" required />
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="input input-bordered w-full" required />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="input input-bordered w-full" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="textarea textarea-bordered w-full" required />
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" className="input input-bordered w-full" required />
        <input type="text" name="cover" value={formData.cover} onChange={handleChange} placeholder="Image URL" className="input input-bordered w-full" required />
        <label className="flex items-center gap-2">
          <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} className="checkbox" />
          In Stock
        </label>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;
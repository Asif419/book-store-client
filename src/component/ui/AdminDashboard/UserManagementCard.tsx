// import Swal from "sweetalert2";
// import { useBlockUserMutation } from "../../../redux/features/api/endpoints/userApi";

// export type TUser = {
//   _id: string;
//   name: string;
//   email: string;
//   role: "user" | "admin";
//   isBlocked: boolean;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

// const UserManagementCard = ({ user }: { user: TUser }) => {
//   const { _id, email, name, isBlocked } = user;

//   const [blockUser] = useBlockUserMutation();

//   const handleDeactivateUser = async (id: string) => {
//     if (!isBlocked) {
//       Swal.fire({
//         title: `Do you want to Deactivate ${name}'s account?`,
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!",
//       }).then(async (result) => {
//         if (result.isConfirmed) {
//           const res = await blockUser(id);
//           console.log(res);
//           if (res.data.success) {
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been blocked.",
//               icon: "success",
//             });
//           }
//         }
//       });
//     }
//   };
//   return (
//     <tr className="border-b border-gray-700">
//       <td className="px-4 py-2">{name}</td>
//       <td className="px-4 py-2">{email}</td>
//       <td className="px-4 py-2">
//         <span
//           className={`px-2 py-1 rounded text-sm font-semibold
//               ${
//                 isBlocked === false
//                   ? "bg-green-600 text-white"
//                   : isBlocked === true
//                   ? "bg-red-600 text-white"
//                   : "bg-yellow-500 text-black"
//               }`}
//         >
//           {isBlocked === false ? "Active" : "Inactive"}
//         </span>
//       </td>
//       <td className="px-4 py-2">
//         <span
//           onClick={() => handleDeactivateUser(_id)}
//           className={`px-2 py-1 rounded text-sm font-semibold
//               ${
//                 isBlocked === false
//                   ? "bg-green-600 text-white"
//                   : isBlocked === true
//                   ? "bg-red-600 text-white"
//                   : "bg-yellow-500 text-black"
//               }`}
//         >
//           {isBlocked === false ? "Active" : "Inactive"}
//         </span>
//       </td>
//     </tr>
//   );
// };

// export default UserManagementCard;

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin"; // Add other roles if needed
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const UserManagementCard = ({ user }: { user: TUser }) => {
  const { email, name, isBlocked, role } = user;
  console.log(user);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://i.ibb.co.com/DfsLZQn9/download.png" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{`${name} (${role})`}</h2>
          <p>Email : {email}</p>
          <p>Status : {isBlocked ? "Blocked User" : "Active User"}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementCard;

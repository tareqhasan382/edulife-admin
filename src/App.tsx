import { useState } from "react";
import {
  useAllUserQuery,
  UserResponse,
  useUpdateUserMutation,
} from "./Redux/auth/authApi";

function App() {
  const { data } = useAllUserQuery(undefined);
  const [updateUser] = useUpdateUserMutation();
  const [selectedRoles, setSelectedRoles] = useState<{ [key: string]: string }>(
    {}
  );

  const handleRoleChange = async (
    userId: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newRole = event.target.value;

    setSelectedRoles((prev) => ({
      ...prev,
      [userId]: newRole,
    }));
    await updateUser({ id: userId, data: { role: newRole } });
  };

  return (
    <div className="w-full h-auto bg-[#FDF8EE]">
      <div className="p-2 w-full h-full flex flex-col items-start">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="w-full h-full my-6 flex flex-col gap-6">
          {/* Enable horizontal scroll for the user table */}
          <div className="w-full overflow-x-auto flex flex-col gap-6">
            <div className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]">
              <h1>Image</h1>
              <h1>Name </h1>
              <h1>Email </h1>
              <h1 className=" px-2 ">Role </h1>
              <h1>Action </h1>
            </div>
            {data?.data.map((user: UserResponse) => (
              <div
                key={user._id}
                className="w-full grid grid-cols-5 items-center gap-6 min-w-[800px]"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
                  alt="user image"
                  className="w-[40px] h-[40px] object-fill rounded"
                />
                <h1>{user?.name} </h1>
                <h1>{user?.email} </h1>
                <h1 className=" px-2 ">{user?.role} </h1>

                {/* Individual role selection for each user */}
                <div className="flex items-center gap-3">
                  <select
                    value={selectedRoles[user._id] || user.role}
                    onChange={(event) => handleRoleChange(user._id, event)}
                    className="p-2 border rounded"
                  >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

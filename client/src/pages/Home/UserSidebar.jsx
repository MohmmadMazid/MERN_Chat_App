import React from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../slice/user/user.thunk";
const UserSidebar = () => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <div
      className="max-w-[20rem] w-full h-screen  flex flex-col border-r-1
     border-r-white/10"
    >
      <div>
        <h1 className="bg-black font-bold mx-3 mt-3 text-[#5754E8] py-2  px-1 rounded-lg">
          Gup Shup
        </h1>
      </div>
      <div className="p-3 mb-4 mt-2 ">
        <label className="input   gap-2">
          <input type="search" className="grow" placeholder="Search" />
          <FaSearch />
        </label>
      </div>
      <div className="h-full overflow-y-auto px-2 ">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
      <div className="bg-black flex items-center justify-between p-2 ">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
          </div>
        </div>
        <button
          className="btn btn-primary btn-sm px-6"
          onClick={handleLogoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;

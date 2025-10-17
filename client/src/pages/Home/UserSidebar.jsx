import React from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";

const UserSidebar = () => {
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
          <input type="search" class="grow" placeholder="Search" />
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
        <div class="avatar">
          <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/distracted2@192.webp" />
          </div>
        </div>
        <button class="btn btn-primary btn-sm px-6">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;

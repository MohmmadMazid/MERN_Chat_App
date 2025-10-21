import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import {
  getOtherUsersThunk,
  logoutUserThunk,
} from "../../slice/user/user.thunk";

const UserSidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const data = useSelector((state) => state);
  const otherUsers = data?.userSlice?.otherUsers;
  const userProfile = data?.userSlice?.userProfile;

  const dispatch = useDispatch();
  const handleLogoutUser = () => {
    dispatch(logoutUserThunk());
  };

  useEffect(() => {
    if (!searchValue) {
      setUsers(otherUsers);
    } else {
      setUsers(
        otherUsers.filter((user) => {
          return (
            user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.fullName.toLowerCase().includes(searchValue.toLowerCase())
          );
        })
      );
    }
  }, [searchValue, otherUsers]);

  useEffect(() => {
    (async () => {
      await dispatch(getOtherUsersThunk());
    })();
  }, []);
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
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search"
          />
          <FaSearch />
        </label>
      </div>
      <div className="h-full overflow-y-auto px-2  flex flex-col gap-1">
        {users?.map((user) => {
          return <User key={user?._id} userDetails={user} />;
        })}
      </div>
      <div className=" flex items-center justify-between p-2 ">
        <div className="flex  items-center gap-3">
          <div className="avatar avatar-online">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img src={userProfile?.avatar} />
            </div>
          </div>
          <h2 className="font-bold ">{userProfile?.username}</h2>
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

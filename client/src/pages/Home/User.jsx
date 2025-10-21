import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../slice/user/user.slice";

const User = ({ userDetails }) => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state?.userSlice?.selectedUser);
  // console.log("user details ", data?.userSlice?.otherUsers);
  // const selectUser = data?.userSlice?.setSelectedUser;
  // console.log(data?._id === userDetails?._id);
  // console.log("online users", data?.socketSlice?.onlineUsers);
  const onlineUsers = useSelector((state) => state?.socketSlice?.onlineUsers);
  const isUSerOnline = onlineUsers?.includes(userDetails?._id);

  const handleSelectedUser = () => {
    dispatch(setSelectedUser(userDetails));
  };
  return (
    <div
      onClick={handleSelectedUser}
      className={`flex gap-5 items-center hover:bg-gray-500 hover:rounded-2xl hover:font-bold px-2 py-1 cursor-pointer ${
        userDetails?._id === selectedUser?._id &&
        "bg-gray-500 rounded-2xl font-bold"
      } `}
    >
      <div className={`avatar ${isUSerOnline && "avatar-online"}`}>
        <div className="rounded-full w-12">
          {/* <img src="https://img.daisyui.com/images/profile/demo/distracted3@192.webp" />  statically used*/}
          <img src={userDetails?.avatar} />
        </div>
      </div>
      <div>
        <h2 className="line-clamp-1 ">{userDetails?.fullName}</h2>
        <p className="text-xs">{userDetails?.username}</p>
      </div>
    </div>
  );
};

export default User;

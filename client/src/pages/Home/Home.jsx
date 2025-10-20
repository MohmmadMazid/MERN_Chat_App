import React, { useEffect } from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";
import { useDispatch, useSelector } from "react-redux";
import { initializeSocket } from "../../slice/socket/socket.slice";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const isAuthenticated = data?.userSlice?.isAuthenticated;
  // console.log("data in home", data?.userSlice?.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(initializeSocket);
  }, [isAuthenticated]);
  return (
    <div className="flex ">
      <UserSidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

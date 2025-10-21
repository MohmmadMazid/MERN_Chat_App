import React, { useEffect } from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeSocket,
  setOnlineUsers,
} from "../../slice/socket/socket.slice";
import { setNewMessages } from "../../slice/message/message.slice";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const isAuthenticated = data?.userSlice?.isAuthenticated;
  // console.log("data in home", data);
  const userProfileId = data?.userSlice?.userProfile?._id;
  const socket = data?.socketSlice?.socket;
  // console.log("online users", data?.socketSlice?.onlineUsers);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(initializeSocket(userProfileId));
  }, [isAuthenticated]);

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.on("onlineUsers", (onlineUsers) => {
      // console.log("online users", onlineUsers);
      dispatch(setOnlineUsers(onlineUsers));
    });
    socket.on("newMessage", (newMessage) => {
      console.log("online users new message", newMessage);
      // dispatch(setOnlineUsers(onlineUsers));
      dispatch(setNewMessages(newMessage));
    });
    return () => {
      socket.close();
    };
  }, [socket]);
  return (
    <div className="flex ">
      <UserSidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

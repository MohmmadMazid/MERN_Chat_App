import React from "react";
import UserSidebar from "./userSidebar";
import MessageContainer from "./MessageContainer";

const Home = () => {
  return (
    <div className="flex ">
      <UserSidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

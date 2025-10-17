import React from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";

const MessageContainer = () => {
  return (
    <div className="w-full h-screen  flex flex-col ">
      <div className=" border-b-2 border-b-white/10 p-3 ">
        <User />
      </div>
      <div className="h-full overflow-y-auto p-3">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="w-full p-3 flex gap-3">
        <input
          type="text"
          placeholder="write message..."
          className="input input-primary w-full"
        />
        <button class="btn btn-square btn-outline btn-primary">
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;

import React from "react";
import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  const userProfile = useSelector((state) => state?.userSlice?.userProfile);
  const selecteduser = useSelector((state) => state?.userSlice?.selectedUser);
  // console.log("selecteduser inside message ", selecteduser);
  // console.log(userProfile?._id, messageDetails?.senderId);
  const currentTime = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return (
    <div>
      <div
        className={`chat   ${
          userProfile?._id === messageDetails?.senderId
            ? "chat-end"
            : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              // src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              src={
                userProfile?._id === messageDetails?.senderId
                  ? userProfile?.avatar
                  : selecteduser?.avatar
              }
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">{currentTime}</time>
        </div>
        <div className="chat-bubble tracking-wider">
          {messageDetails?.message}
        </div>
      </div>
    </div>
  );
};

export default Message;

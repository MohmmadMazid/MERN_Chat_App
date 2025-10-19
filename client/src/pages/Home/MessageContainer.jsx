import React, { useEffect } from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getMessageThunk } from "../../slice/message/message.thunk";
import SendMessage from "./Sendmessage";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state?.userSlice?.selectedUser);
  const usermessages = useSelector((state) => state?.messageSlice?.messages);
  // console.log("user in message ", usermessages);
  // console.log("selected user in message ", selectedUser?._id);

  useEffect(() => {
    if (!selectedUser?._id) {
      return;
    }
    dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
  }, [selectedUser]);
  // const messageSend = () => {
  //   toast.success("message send successfully");
  // };
  return (
    <>
      {!selectedUser ? (
        <>Please select a user</>
      ) : (
        <div className="w-full h-screen  flex flex-col ">
          <div className=" border-b-2 border-b-white/10 p-1 ">
            <User userDetails={selectedUser} />
          </div>
          <div className="h-full overflow-y-auto p-3">
            {usermessages?.map((messageDetails) => {
              return (
                <Message
                  key={messageDetails?._id}
                  messageDetails={messageDetails}
                />
              );
            })}
          </div>
          <SendMessage />
        </div>
      )}
    </>
  );
};

export default MessageContainer;

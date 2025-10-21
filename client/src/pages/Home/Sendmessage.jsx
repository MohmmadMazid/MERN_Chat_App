import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../slice/message/message.thunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const selectedUser = useSelector((state) => state?.userSlice?.selectedUser);

  const handleSendMessage = () => {
    // console.log(message, selectedUser?._id);
    dispatch(sendMessageThunk({ receiverId: selectedUser?._id, message }));
    setMessage("");
  };

  return (
    <>
      <div className="w-full p-3 flex gap-3 ">
        <input
          type="text"
          placeholder="write message..."
          className="input input-primary w-full"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          onClick={handleSendMessage}
          className="btn btn-square btn-outline btn-primary"
        >
          <IoIosSend />
        </button>
      </div>
    </>
  );
};

export default SendMessage;

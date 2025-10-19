import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";

export const sendMessage = asyncHandler(async (req, res, next) => {
  const senderId = req.user?._id;
  // console.log(senderId);
  const receiverId = req.params.receiverId;
  // console.log(receiverId);
  const message = req.body.message;
  if (!senderId || !receiverId || !message) {
    return next(new errorHandler("all fields are required", 400));
  }
  let conversation = await Conversation.findOne({
    participants: { $all: [receiverId, senderId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.messages.push(newMessage._id);
    await conversation.save();
  }

  // we will socket.io logic here
  //we will be apply the socket.io here

  res.status(200).json({ success: true, message: newMessage });
});

export const getMessages = asyncHandler(async (req, res, next) => {
  let myId = req.user?._id;
  console.log(myId);
  const otherParticipantId = req.params.otherparticipantId;
  console.log("otherParticipantId is ", otherParticipantId);
  console.log("my id ", myId);

  if (!myId || !otherParticipantId) {
    return next(
      new errorHandler("both receiver and senderId are required", 400)
    );
  }

  let conversation = await Conversation.findOne({
    participants: { $all: [myId, otherParticipantId] },
  }).populate("messages");
  console.log(conversation);

  res.status(200).json({ success: true, responseData: conversation });
});

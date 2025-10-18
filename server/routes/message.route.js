import express from "express";

import { isAuthenticated } from "../mddlewares/auth.middleware.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

const rotuer = express.Router();

rotuer.post("/send/:receiverId", isAuthenticated, sendMessage);
rotuer.get("/get-messages/:otherparticipantId", isAuthenticated, getMessages);

export default rotuer;

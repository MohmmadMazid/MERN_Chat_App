import express from "express";
import { login, register } from "../controllers/user.controller.js";

const rotuer = express.Router();

rotuer.post("/register", register);
rotuer.get("/login", login);

export default rotuer;

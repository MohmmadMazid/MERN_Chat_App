import express from "express";
import {
  getOtherUsers,
  getprofile,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../mddlewares/auth.middleware.js";

const rotuer = express.Router();

rotuer.post("/register", register);
rotuer.post("/login", login);
rotuer.get("/logout", isAuthenticated, logout);
rotuer.get("/get-profile", isAuthenticated, getprofile);
rotuer.get("/get-other-users", isAuthenticated, getOtherUsers);

export default rotuer;

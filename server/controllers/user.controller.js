import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";

export const register = asyncHandler((req, res, next) => {
  try {
    const { fullName, username, password, gender } = req.body;
    console.log(req.body);
    if (!fullName || !username || !password || !gender) {
      res
        .status(400)
        .json({ success: false, message: "all field are required!" });
    }
    res.send("hello register route");
  } catch (error) {
    console.log(error);
  }
});

export const login = (req, res, next) => {
  res.send("hello this is the login route");
};

import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";

export const register = asyncHandler(async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;
  // console.log(req.body);
  if (!fullName || !username || !password || !gender) {
    return next(new errorHandler("all fields are required", 400));
  }

  let user = await User.findOne({ username });
  // console.log("user ", user);
  if (user) {
    return next(new errorHandler("user all ready exists ", 404));
  }
  const avatarType = gender === "male" ? "boy" : "girl";
  const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;
  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser = await User.create({
    fullName,
    username,
    password: hashedPassword,
    gender,
    avatar,
  });
  res.status(200).json({ success: true, message: "user created successfully" });
});
export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) {
    return next(
      new errorHandler("please enter a valid username and password", 400)
    );
  }

  let user = await User.findOne({ username: username });
  // console.log(user);
  if (!user) {
    return next(new errorHandler("please enter  valid username and password"));
  }
  const isConfirmPassword = await bcrypt.compare(password, user.password);
  if (!isConfirmPassword) {
    return next(new errorHandler("please enter valid username and passwor"));
  }

  res.status(200).json({ success: true, user: user });
});

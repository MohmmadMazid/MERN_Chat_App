import User from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  const data = {
    _id: newUser?._id,
  };
  const token = jwt.sign(data, process.env.JWT_SECRETS, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res
    .status(200)
    .cookie("token", token, {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      userdata: {
        message: "user created successfully",
        token: token,
      },
    });
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
  const data = {
    _id: user?._id,
  };
  const token = jwt.sign(data, process.env.JWT_SECRETS, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  res
    .status(200)
    .cookie("token", token, {
      expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production",
      secure: true,
      sameSite: "None",
    })
    .json({
      success: true,
      user: user,
      token,
      data: jwt.verify(token, process.env.JWT_SECRETS),
    });
});

export const getprofile = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  // console.log("userid inside controller ", userId);
  const profile = await User.findById(userId);
  res.status(200).json({ success: true, profiledata: profile });
});

export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res
    .status(200)
    .json({ success: true, message: "user logged out successfully" });
});

export const getOtherUsers = asyncHandler(async (req, res, next) => {
  const userId = req.user?._id;
  // console.log("userid ", userId);
  const otherUsers = await User.find({ _id: { $ne: userId } });

  res.status(200).json({ success: true, responseData: otherUsers });
});

import cookieParser from "cookie-parser";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.replace("Bearer ", "");
  //   console.log(token);
  if (!token) {
    return next(
      new errorHandler("invalid token or user is not looged in", 400)
    );
  }
  const tokendata = jwt.verify(token, process.env.JWT_SECRETS);
  if (!tokendata) {
    return next(new errorHandler("user is not loggedIn", 400));
  }
  req.user = tokendata;
  //   console.log({ "tokendata is ": tokendata, user: req.user });
  return next();
});

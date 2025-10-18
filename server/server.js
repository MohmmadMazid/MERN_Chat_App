import dotenv from "dotenv";
dotenv.config();
const app = express();
import express, { urlencoded } from "express";
import connectDb from "./db/connection1.db.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import cookieParser from "cookie-parser";

import { errorMiddleware } from "./mddlewares/error.middleware.js";

connectDb();
const PORT = process.env.PORT || 5500;
import userRoutes from "./routes/user.route.js";
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);

app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

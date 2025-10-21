import { app, server } from "./socket/socket.js";
// const app = express();
import express, { urlencoded } from "express";
import connectDb from "./db/connection1.db.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./mddlewares/error.middleware.js";
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);

connectDb();
const PORT = process.env.PORT || 5500;
import userRoutes from "./routes/user.route.js";
import messageRoutes from "./routes/message.route.js";
app.use(cookieParser());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/message", messageRoutes);

app.use(errorMiddleware);
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

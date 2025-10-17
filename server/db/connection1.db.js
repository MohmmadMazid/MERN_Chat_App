import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    const instance = await mongoose.connect(MONGO_URL);
    console.log("mongodb Connected " + instance.connection.host);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;

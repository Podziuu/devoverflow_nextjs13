import mongoose from "mongoose";

let isConntected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MISSING MONGODB URL");

  if (isConntected) {
    return console.log("Already connected to database");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "DevOverflow",
    });
    isConntected = true;

    console.log("MongoDB is connectd");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

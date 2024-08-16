import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect("mongodb://mongo:27017/auto");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

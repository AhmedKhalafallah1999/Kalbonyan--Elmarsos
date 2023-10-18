import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import moduleName from "module";
import jobModel from "./models/jobModel.js";
import UserModels from "./models/UserModels.js";
try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await UserModels.findOne({ email: "test@test.com" });
  const jsonDataJobs = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );
  const jobs = jsonDataJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await jobModel.deleteMany({ createdBy: user._id });
  await jobModel.create(jobs);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}

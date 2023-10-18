import { StatusCodes } from "http-status-codes";
import UserModels from "../models/UserModels.js";
import jobModel from "../models/jobModel.js";
// for using cloudainary
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
// import { response } from "express";

export const getCurrentUser = async (req, res) => {
  const user = await UserModels.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStatus = async (req, res) => {
  const jobsNumber = await jobModel.countDocuments();
  const usersNumber = await UserModels.countDocuments();
  res.status(StatusCodes.OK).json({ jobsNumber, usersNumber });
};
export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  if (req.file) {
    try {
      const response = await cloudinary.v2.uploader.upload(req.file.path);
      await fs.unlink(req.file.path);
      obj.avatar = response.secure_url;
      obj.avatarPublicId = response.public_id;

      // Handle success (e.g., update database with Cloudinary URL)
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      // Handle the error (e.g., return an error response to the client)
    }
  }
  const updatedUser = await UserModels.findByIdAndUpdate(
    {
      _id: req.user.userId,
    },
    obj,
    {
      new: true,
    }
  );
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }

  // if (req.file && updateUser.avatarPublicId)
  res.status(StatusCodes.OK).json({ updateUser: updatedUser });
};

// for importing validation packages
import { body, param, validationResult } from "express-validator";
import { JOB_STATUS, JOB_TYPE, USER_ROLES } from "../utils/constants.js";
import UserModels from "../models/UserModels.js";
import mongoose from "mongoose";
import { BadRequestError, UNAUTHORIZED } from "../errors/customErrors.js";
import jobModel from "../models/jobModel.js";

export const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
        return res.status(400).json({ error: errorMessage });
        // console.log(errorMessage);
      }
      next();
    },
  ];
};
export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 7 })
    .withMessage("The name must be more than or equal to 7 charcters"),
]);
export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("jobLocation is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid job status"),
  body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("invalid job Type"),
]);
export const validateRegisterInputs = withValidationErrors([
  body("name", "lastName")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 5, max: 10 })
    .withMessage("The name must be between 5 to 10 charcters"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid Email")
    .custom(async (email) => {
      const user = await UserModels.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already Exist");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("paassword is required")
    .isLength({ min: 8, max: 18 })
    .withMessage("password must be between 8 to 18 characters"),
  // .isStrongPassword()
  // .withMessage("non strong password"),
  body("location").notEmpty().withMessage("Location is required"),
]);

export const validateLoginInputs = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid Email"),
  // .custom(async (email) => {
  //   const user = await UserModels.findOne({ email });
  //   if (!user) {
  //     throw new BadRequestError("Email is not Exist");
  //   }
  // }),
  body("password").notEmpty().withMessage("paassword is required"),
]);
export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoose = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoose) throw new BadRequestError("Invalid Id");
    const job = await jobModel.findById(value);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UNAUTHORIZED("not authorized to access this job");
  }),
]);
export const validateUserUpdateInput = withValidationErrors([
  body("name", "lastName")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 5, max: 10 })
    .withMessage("The name must be between 5 to 10 charcters"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid Email")
    .custom(async (email, { req }) => {
      const user = await UserModels.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("the email you entered is not belong to you");
      }
    }),
  body("location").notEmpty().withMessage("Location is required"),
  // body("role")
  //   .isIn(Object.values(USER_ROLES))
  //   .withMessage("invalid user roles"),
]);

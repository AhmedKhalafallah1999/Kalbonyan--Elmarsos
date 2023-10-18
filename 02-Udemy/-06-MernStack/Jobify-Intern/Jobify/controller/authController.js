import { StatusCodes } from "http-status-codes";
import UserModels from "../models/UserModels.js";
// // for hashing password
// import bcrypt from "bcryptjs";
// alternative
import { HashPasswordHandler, MatchPassword } from "../utils/HashUtils.js";
import { JWT } from "../utils/TokenUtils.js";
import { UnauthinticatedError } from "../errors/customErrors.js";
export const register = async (req, res) => {
  const isFirstAccount = (await UserModels.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  // const salt = await bcrypt.genSalt(10);
  // const hashPassword = await bcrypt.hash(req.body.password, salt);

  req.body.password = await HashPasswordHandler(req.body.password);
  const user = await UserModels.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
export const login = async (req, res) => {
  const user = await UserModels.findOne({ email: req.body.email });
  if (!user) throw new UnauthinticatedError("Invalid Credintials");
  const isPassword = await MatchPassword(req.body.password, user.password);
  if (!isPassword)
    throw new UnauthinticatedError(
      "Invalid credentials => Password is not match"
    );
  const token = JWT({ userId: user._id, role: user.role });
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json("User loged in");
};
export const logOut = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json("User Logged out");
};

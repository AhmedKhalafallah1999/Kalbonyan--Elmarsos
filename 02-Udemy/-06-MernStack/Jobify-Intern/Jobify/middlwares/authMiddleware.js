import {
  BadRequestError,
  UnauthinticatedError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/TokenUtils.js";
export const authinticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthinticatedError("UnAuthintacated invalid");
  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === "652b9d0ba5f0d8e9b057192e";
    req.user = { userId, role, testUser };
    console.log("Auth User");
    next();
  } catch (error) {
    throw new UnauthinticatedError("Authintication Invalid");
  }
};

// for acceccing the application status for the admin
export const authorizedPermission = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthinticatedError("UnAuthintacated invalid");
    }
    next();
  };
};
// for checking
export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Read Only");
  next();
};

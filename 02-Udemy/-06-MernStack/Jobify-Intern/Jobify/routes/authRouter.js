import { Router } from "express";
const router = Router();
import { login, register, logOut } from "../controller/authController.js";
import {
  validateRegisterInputs,
  validateLoginInputs,
} from "../middlwares/validateMiddleware.js";
router.post("/register", validateRegisterInputs, register);
router.post("/login",validateLoginInputs, login);
router.get("/logout", logOut);
export default router;

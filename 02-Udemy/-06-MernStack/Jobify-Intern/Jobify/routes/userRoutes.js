import { Router } from "express";
import {
  getApplicationStatus,
  getCurrentUser,
  updateUser,
} from "../controller/userController.js";
import { validateUserUpdateInput } from "../middlwares/validateMiddleware.js";
import {
  authorizedPermission,
  checkForTestUser,
} from "../middlwares/authMiddleware.js";
import fileUploaded from "../middlwares/multer.js";
const router = Router();
router.get("/current-user", getCurrentUser);
router.get(
  "/admin/app-status",
  authorizedPermission("admin"),
  getApplicationStatus
);
router.patch(
  "/update-user",
  checkForTestUser,
  fileUploaded.single("avatar"),
  validateUserUpdateInput,
  updateUser
);
export default router;

import { Router } from "express";
const router = Router();
import {
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
  creataJob,
  showStats,
} from "../controller/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middlwares/validateMiddleware.js";
import { checkForTestUser } from "../middlwares/authMiddleware.js";
// Get al jobs
router.get("/jobs", getAllJobs);
// create a job
router.post("/jobs", checkForTestUser, validateJobInput, creataJob);
// show stats
router.get("/jobs/stats", showStats);
// get single job
router.get("/jobs/:id", validateIdParam, getSingleJob);
// edit a single job
router.patch("/jobs/:id", checkForTestUser, validateJobInput, updateJob);
// delete a single job
router.delete("/jobs/:id", checkForTestUser, deleteJob);
// module.exports = router;
export default router;

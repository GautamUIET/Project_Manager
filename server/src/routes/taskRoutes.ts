import { Router } from "express";
import { getTasks } from "../controllers/taskController";
import { createTask } from "../controllers/taskController";
import { updateTaskStatus } from "../controllers/taskController";
import { getUserTasks } from "../controllers/taskController";
const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
router.get("/user/:userId", getUserTasks);
export default router;
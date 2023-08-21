import express, { Router } from "express";
import {
  getAllTasks,
  getTask,
  postTask,
  deleteTask,
  patchTask,
  putTask,
} from "../controllers/taskControllers";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.post("/", postTask);
router.delete("/:id", deleteTask);
router.patch("/:id", patchTask);
router.put("/:id", putTask);

export default router;

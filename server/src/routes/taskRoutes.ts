import express, { Router } from "express";
import {
  getAllTasks,
  postTask,
  deleteTask,
} from "../controllers/taskControllers";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", postTask);

router.delete("/:id", deleteTask);

export default router;

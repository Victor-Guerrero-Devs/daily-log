import express, { Router } from "express";
import { getAllTasks, postTask } from "../controllers/taskControllers";

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", postTask);

export default router;

import express from "express";
import {
  getAllCategories,
  getCategory,
  addCategory,
} from "../controllers/categoryControllers";

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategory);
router.post("/", addCategory);

export default router;

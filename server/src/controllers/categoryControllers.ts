import { Request, Response } from "express";
import Category from "../models/Category";

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const category = new Category();
    const categories = await category.getCategories();
    res.status(200).json(categories.rows);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

const getCategory = async (req: Request, res: Response) => {
  try {
    const category = new Category();
    const categoryId = Number(req.params.id);
    const categoryById = await category.getCategoryById(categoryId);
    if (!categoryById) {
      res.status(404).json({ error: "Category not found" });
      return;
    }
    res.status(200).json(categoryById);
  } catch (error: unknown) {
    console.log("Getting category by ID has gone wrong");
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error);
    }
  }
};

const addCategory = async (req: Request, res: Response) => {
  try {
    const category = new Category();
    await category.addCategory(req.body);
    res.status(201).json({ message: "Item has been added" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

export { getAllCategories, getCategory, addCategory };

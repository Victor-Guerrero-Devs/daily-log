import { Request, Response } from "express";
import Task from "../models/Task";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const task = new Task();
    const tasks = await task.getTasks();
    res.status(200).json(tasks.rows);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

const postTask = async (req: Request, res: Response) => {
  try {
    const task = new Task();
    await task.addTask(req.body);
    res.status(201).json({ message: "Item has been added" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = new Task();
    await task.deleteTask(Number(req.params.id));
    res.status(200).json({ message: "Item has been deleted" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

export { getAllTasks, postTask, deleteTask };

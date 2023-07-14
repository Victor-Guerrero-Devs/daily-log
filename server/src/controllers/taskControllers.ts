import { Request, Response } from "express";
import Task from "../models/Task";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const task = new Task();
    const tasks = await task.getTasks();
    res.json(tasks.rows);
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
    const result = await task.addTask(req.body);
    console.log("Item has been added: " + result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Oh no!!");
      console.log(req.body);
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

export { getAllTasks, postTask };

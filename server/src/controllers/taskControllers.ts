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

const getTask = async (req: Request, res: Response) => {
  try {
    const task = new Task();
    const taskId = Number(req.params.id);
    const taskById = await task.getTaskById(taskId);
    if (!taskById) {
      res.status(404).json({ error: "Task not found" });
      return;
    }
    res.status(200).json(taskById);
  } catch (error: unknown) {
    console.log("Getting task by ID has gone wrong");
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error);
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

const patchTask = async (req: Request, res: Response) => {
  try {
    const task = new Task();
    await task.editTask(Number(req.params.id), req.body);
    res.status(200).json({ message: "Item has been updated" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

const putTask = async (req: Request, res: Response) => {
  try {
    const task = new Task();
    await task.putTask(Number(req.params.id), req.body);
    res.status(200).json({ message: "Item has been entirely updated" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: "An error occurred" });
      console.error(error.message);
    }
  }
};

export { getAllTasks, getTask, postTask, deleteTask, patchTask, putTask };

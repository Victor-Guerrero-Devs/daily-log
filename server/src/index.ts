import express, { Request, Response } from "express";
import { config } from "dotenv";
import pool from "./data/database";

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

pool.connect().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

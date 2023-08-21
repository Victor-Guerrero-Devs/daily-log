import express, { Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import pool from "./data/database";
import taskRoutes from "./routes/taskRoutes";
import categoryRoutes from "./routes/categoryRoutes";

config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.use("/tasks", taskRoutes);
app.use("/categories", categoryRoutes);

pool.connect().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});

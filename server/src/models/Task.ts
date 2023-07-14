import { QueryResult } from "pg";
import pool from "../data/database";

interface TaskData {
  id?: number;
  title: string;
  language?: string;
  description?: string;
  date_added?: Date;
  is_completed?: boolean;
}

class Task {
  async getTasks(): Promise<QueryResult<TaskData>> {
    const query = "SELECT * FROM tasks;";
    const client = await pool.connect();
    try {
      const result = await client.query<TaskData>(query);
      return result;
    } finally {
      client.release();
    }
  }

  async addTask(data: TaskData): Promise<QueryResult<TaskData>> {
    const query = `
      INSERT INTO tasks (title, language, description)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [data.title, data.language, data.description];
    const client = await pool.connect();
    console.log(values);
    try {
      const result = await client.query<TaskData>(query, values);
      return result;
    } finally {
      client.release();
    }
  }

  async editTask(id: number, data: TaskData): Promise<QueryResult<TaskData>> {
    const query = `
      UPDATE tasks
      SET title = $2, language = $3, description = $4, date_added = $5, is_completed = $6
      WHERE id = $1
      RETURNING *;
    `;
    const values = [
      id,
      data.title,
      data.language,
      data.description,
      data.date_added || new Date(),
      data.is_completed || false,
    ];
    const client = await pool.connect();
    try {
      const result = await client.query<TaskData>(query, values);
      return result;
    } finally {
      client.release();
    }
  }

  async deleteTask(id: number): Promise<QueryResult<TaskData>> {
    const query = `
      DELETE FROM tasks
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id];
    const client = await pool.connect();
    try {
      const result = await client.query<TaskData>(query, values);
      return result;
    } finally {
      client.release();
    }
  }
}

export default Task;

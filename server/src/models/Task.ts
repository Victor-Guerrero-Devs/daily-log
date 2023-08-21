import { QueryResult } from "pg";
import pool from "../data/database";

interface TaskData {
  id?: number;
  title: string;
  language?: string;
  description?: string;
  category?: number;
  date_added?: Date;
  is_completed?: boolean;
}

class Task {
  async getTasks(): Promise<QueryResult<TaskData>> {
    const query = `
      SELECT tasks.*, category.name AS category_name
      FROM tasks 
      LEFT JOIN category ON tasks.category = category.id;
    `;
    const client = await pool.connect();
    try {
      const result = await client.query<TaskData>(query);
      return result;
    } finally {
      client.release();
    }
  }

  async getTaskById(id: number) {
    const query = `
     SELECT tasks.*, category.name AS category_name
     FROM tasks 
     LEFT JOIN category ON tasks.category = category.id
     WHERE tasks.id = $1;
    `;
    const client = await pool.connect();
    try {
      const values = [id];
      const result = await client.query<TaskData>(query, values);
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0];
    } catch (error: any) {
      console.log("SQL Error: " + error.message);
    } finally {
      client.release();
    }
  }

  async addTask(data: TaskData): Promise<QueryResult<TaskData>> {
    const query = `
      INSERT INTO tasks (title, language, description, category)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [data.title, data.language, data.description, data.category];
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
      SET is_completed = $2
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id, true];
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

  async putTask(id: number, data: TaskData): Promise<QueryResult<TaskData>> {
    const query = `
      UPDATE tasks
      SET title = $2, language = $3, description = $4
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id, data.title, data.language, data.description];
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

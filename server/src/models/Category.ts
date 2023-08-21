import { QueryResult } from "pg";
import pool from "../data/database";

interface CategoryData {
  id: number;
  name: string;
}

class Category {
  async getCategories(): Promise<QueryResult<CategoryData>> {
    const query = "SELECT * FROM categories;";
    const client = await pool.connect();
    try {
      const result = await client.query<CategoryData>(query);
      return result;
    } finally {
      client.release();
    }
  }

  async getCategoryById(id: number) {
    const query = `
      SELECT * FROM categories 
      WHERE id = $1;
    `;
    const client = await pool.connect();
    try {
      const values = [id];
      const result = await client.query<CategoryData>(query, values);
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

  async addCategory(data: CategoryData): Promise<QueryResult<CategoryData>> {
    const query = `
      INSERT INTO categories (name)
      VALUES ($1)
      RETURNING *;
    `;
    const values = [data.name];
    const client = await pool.connect();
    try {
      const result = await client.query<CategoryData>(query, values);
      return result;
    } finally {
      client.release();
    }
  }
}

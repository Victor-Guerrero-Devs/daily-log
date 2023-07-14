import pkg from "pg";
import { config } from "dotenv";

config();

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "react-daily-log",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export default pool;

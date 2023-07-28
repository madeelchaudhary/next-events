import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST,
  port: +(process.env.PORT || 3306),
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

export const db = pool.promise();

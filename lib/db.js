import mysql from "mysql2/promise";

export async function connect() {
  if (process.env.MYSQL_URL) {
    return mysql.createConnection(process.env.MYSQL_URL);
  }

  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
}

/*
import mysql from "mysql2/promise";

let pool;

export const connect = async () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      connectionLimit: 10,
    });
  }
  return pool;
}*/
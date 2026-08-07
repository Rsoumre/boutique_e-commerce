import mysql from "mysql2/promise";

export async function connect() {
  return mysql.createConnection({
    host: process.env.DB_HOST || process.env.MYSQLHOST || "localhost",
    user: process.env.DB_USER || process.env.MYSQLUSER || "root",
    port: parseInt(process.env.DB_PORT || process.env.MYSQLPORT || "3306"),
    password: process.env.DB_PASS || process.env.MYSQLPASSWORD || "",
    database: process.env.DB_NAME || process.env.MYSQLDATABASE || "ecommerce",
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
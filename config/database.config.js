import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

// DB connection from Sequelize
export const connect = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    define: {
      createdAt: "created_at", // Transform default camelCase to snake_case
      updatedAt: "updated_at", // Transform default camelCase to snake_case
      underscored: true, // Change all default column camelCase to snake_case
    },
  }
);

// Console succcess/errors connection
connect
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

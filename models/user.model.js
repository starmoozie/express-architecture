import Sequelize from "sequelize";
import { connect } from "../config/database.config.js";

// Model configuration from Sequelize
export const user = connect.define(
  "users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    role_id: {
      type: Sequelize.UUID,
    },
  },
  {}
);

export default user;

import Sequelize from "sequelize";
import { connect } from "../config/database.config.js";

// Model configuration from Sequelize
export const role = connect.define(
  "roles",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  {}
);

export default role;

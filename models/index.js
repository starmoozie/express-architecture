import Sequelize from "sequelize";
import role from "./role.model.js";
import user from "./user.model.js";

role.hasMany(user, {
  foreignKey: {
    name: "role_id",
    type: Sequelize.UUID,
  },
});

user.belongsTo(role, {
  foreignKey: {
    name: "role_id",
    type: Sequelize.UUID,
  },
});

export {
    role,
    user 
};

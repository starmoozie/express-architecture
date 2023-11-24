import { RoleController } from "../controllers/role.controller.js";
import { store, update, detail } from "../validators/role.validator.js";
import { defaultRoute } from "./base.route.js";

// All available role routes
const role = defaultRoute(
  "role", // endpoint
  new RoleController(), // controller
  {
    // validation
    store: store,
    detail: detail,
    update: update,
  }
);

export default role;

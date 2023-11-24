import { UserController } from "../controllers/user.controller.js";
import { store, update, detail } from "../validators/user.validator.js";
import { defaultRoute } from "./base.route.js";

// All available user routes
const user = defaultRoute(
  "user", // endpoint
  new UserController(), // controller
  {
    // validation
    store: store,
    detail: detail,
    update: update,
  }
);

export default user;

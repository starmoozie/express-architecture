import LoginController from "../../controllers/auth/login.auth.controller.js";
import { login } from "../../validators/auth/login.auth.validator.js";

const controller = new LoginController();

export const loginRoute = [
  {
    controller: controller.login,
    method: "post",
    path: "login",
    validator: [login],
  },
];

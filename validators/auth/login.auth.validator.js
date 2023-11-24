import { check } from "express-validator";
import { result } from "../global.validator.js";

export const login = [
  check("email").exists().notEmpty(),
  check("password").exists().notEmpty(),

  (req, res, next) => result(req, res, next), // Throw error if validation fails
];

export default {
  login,
};

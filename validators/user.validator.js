import { check, param } from "express-validator";
import user from "../models/user.model.js";
import { result, checkUnique, checkExists } from "./global.validator.js";

export const store = [
  check("name")
    .exists()
    .notEmpty()
    .isLength({ max: 20 })
    .custom((value, { req }) => checkUnique(user, "name", value, req)),
  (req, res, next) => result(req, res, next), // Throw error if validation fails
];

export const detail = [
  param("id")
    .exists()
    .custom(async (value) => await checkExists(user, "id", value)),

  (req, res, next) => result(req, res, next), // Throw error if validation fails
];

export const update = [
  param("id")
    .exists()
    .custom(async (value) => await checkExists(user, "id", value)),

  check("name")
    .exists()
    .notEmpty()
    .isLength({ max: 20 })
    .custom((value, { req }) => checkUnique(user, "name", value, req)),

  (req, res, next) => result(req, res, next), // Throw error if validation fails
];

export default {
  store,
  detail,
  update,
};

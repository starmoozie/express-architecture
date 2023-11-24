import { validationResult } from "express-validator";
import { failsMessage } from "../utils/responseMessage.util.js";
import { CODE_UNPROCESSABLE_ENTITY } from "../constants/httpCode.constant.js";

/**
 * Validation message if fails
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 *
 * @returns json response
 */
export const result = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return failsMessage(res, errors.array(), CODE_UNPROCESSABLE_ENTITY);
  }

  next();
};

/**
 * Check unique column in database
 *
 * @param {*} model
 * @param {*} column
 * @param {*} value
 * @param {*} req
 * @returns error Promise
 */
export const checkUnique = async (model, column, value, req) => {
  const entry = await model.findOne({ where: { [column]: value ?? "" } });

  if (
    entry &&
    (req.method === "POST" ||
      (req.method === "PUT" && req.params.id !== entry.id))
  ) {
    return Promise.reject(`${column} already taken`);
  }
};

/**
 * Check if value is exist in database
 *
 * @param {*} model
 * @param {*} column
 * @param {*} value
 * @returns error Promise
 */
export const checkExists = async (model, column, value) => {
  const entry = await model.findOne({ where: { [column]: value ?? "" } });

  if (!entry) {
    return Promise.reject(`Entry not found`);
  }
};

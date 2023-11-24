import {
  CODE_SUCCESS,
  CODE_BAD_REQUEST,
} from "../constants/httpCode.constant.js";

/**
 * Response message success format
 *
 * @param {*} response
 * @param {*} data
 * @param {*} message
 * @param {*} httpCode
 *
 * @returns response
 */
export const successMessage = (
  res,
  data = null,
  message = null,
  httpCode = CODE_SUCCESS
) =>
  res.status(httpCode).send({
    success: true,
    message: message,
    data: data,
  });

/**
 * Response message fails format
 *
 * @param {*} response
 * @param {*} data
 * @param {*} message
 * @param {*} httpCode
 *
 * @returns response
 */
export const failsMessage = (
  res,
  message = null,
  httpCode = CODE_BAD_REQUEST
) =>
  res.status(httpCode).send({
    success: false,
    message: message,
    data: null,
  });

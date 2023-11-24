import { CODE_CREATED, CODE_SUCCESS } from "../constants/httpCode.constant.js";
import {
  currentRouteMenu,
  currentRouteMethod,
  successMessage,
} from "../utils/index.js";

/**
 * Base Controller
 * Extend this class to create a new crud + detail controller
 */
export default class BaseController {

  /**
   * Get all data entries
   *
   * @param {*} req
   * @param {*} res
   *
   * @returns res object
   */
  index = async (req, res) => {
    const entries = await this.model.findAll({
      attributes: { exclude: this.excludes ?? undefined },
      include: this.relationships ?? undefined,
    });
    const message = `Successfully ${currentRouteMethod(req)} ${currentRouteMenu(
      req
    )} data.`;

    return successMessage(res, entries, message, CODE_SUCCESS);
  };

  /**
   * Store a new data entry
   *
   * @param {*} req
   * @param {*} res
   *
   * @returns res object
   */
  store = async (req, res) => {
    const body = req.body;
    const entry = await this.model.create(body);

    const message = `Successfully ${currentRouteMethod(req)} ${currentRouteMenu(
      req
    )} data.`;

    return successMessage(res, entry, message, CODE_CREATED);
  };

  /**
   * Show data entry
   *
   * @param {*} req
   * @param {*} res
   *
   * @returns res object
   */
  detail = async (req, res) => {
    const params = req.params;
    const entry = await this.model.findOne({
      where: { id: params.id },
      attributes: { exclude: this.excludes ?? undefined },
      include: this.relationships ?? undefined,
    });

    const message = `Successfully ${currentRouteMethod(req)} ${currentRouteMenu(
      req
    )} data.`;

    return successMessage(res, entry, message, CODE_SUCCESS);
  };

  /**
   * Update data entry
   *
   * @param {*} req
   * @param {*} res
   *
   * @returns res object
   */
  update = async (req, res) => {
    const params = req.params;
    const body = req.body;
    const entry = await this.model.findByPk(params.id);
    await entry.update(body);

    const message = `Successfully ${currentRouteMethod(req)} ${currentRouteMenu(
      req
    )} data.`;

    return successMessage(res, entry, message, CODE_SUCCESS);
  };

  /**
   * Destroy entries
   *
   * @param {*} req
   * @param {*} res
   *
   * @returns res object
   */
  delete = async (req, res) => {
    await this.model.destroy({
      where: {
        id: JSON.parse(req.params.ids),
      },
    });

    const message = `Successfully ${currentRouteMethod(req)} ${currentRouteMenu(
      req
    )} data.`;

    return successMessage(res, null, message, CODE_SUCCESS);
  };
}

import { CODE_SUCCESS } from "../../constants/httpCode.constant.js";
import {
  successMessage,
} from "../../utils/index.js";
import jwt from "jsonwebtoken";
import user from "../../models/user.model.js";

/**
 * Login Controller
 * Extend this class to create a new crud + detail controller
 */
export default class LoginController {

  /**
   * Store a new data entry
   *
   * @param {*} req
   * @param {*} res
   *
   * @returns res object
   */
  login = async (req, res) => {
    const { email, password } = req.body;
    const auth = await user.findOne({ where: { email: email, password: password } });

    if (auth) {
      return jwt.sign({email: email, password: password}, "secretkey", (err, token) => {
        res.json({
          token,
        });
      });      
    } else {
      const message = `Successfully data.`;

      return successMessage(res, [], message, CODE_SUCCESS);
    }
  };
}

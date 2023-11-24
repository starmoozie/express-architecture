import BaseController from "./base.controller.js";
import { user as model, role } from "../models/index.js";

export class UserController extends BaseController {
  constructor() {
    super();
    this.model = model; // current model
    this.excludes = ["created_at", "updated_at"]; // exclude selected columns in the table
    this.relationships = [
      // relationship loaded
      {
        model: role,
        attributes: ["id", "name"],
      },
    ];
  }
}

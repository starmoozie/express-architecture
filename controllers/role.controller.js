import BaseController from "./base.controller.js";
import { role as model, user } from "../models/index.js";

export class RoleController extends BaseController {
  constructor() {
    super();
    this.model = model; // current model
    this.excludes = ["created_at", "updated_at"]; // exclude selected columns in the table
    this.relationships = [
      // relationship loaded
      {
        model: user,
        attributes: ["id", "name"],
      },
    ];
  }
}

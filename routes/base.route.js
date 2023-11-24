// All default routes
export const defaultRoute = (path, controller, validator) => [
  {
    controller: controller.index,
    method: "get",
    path: path,
    validator: [],
  },
  {
    controller: controller.store,
    method: "post",
    path: path,
    validator: validator.store,
  },
  {
    controller: controller.detail,
    method: "get",
    path: `${path}/:id`,
    validator: validator.detail,
  },
  {
    controller: controller.update,
    method: "patch",
    path: `${path}/:id`,
    validator: validator.update,
  },
  {
    controller: controller.delete,
    method: "delete",
    path: `${path}/:ids`,
    validator: [],
  },
];

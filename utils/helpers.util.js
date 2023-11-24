/**
 * Get current route action method
 * @param {*} req
 * @returns string
 */
export const currentRouteMethod = (req) =>
  req.route.stack.map((item) => item.method)[0];

/**
 * Get current route as menu name
 * @param {*} req
 * @returns string
 */
export const currentRouteMenu = (req) => req.originalUrl.split("/")[3];

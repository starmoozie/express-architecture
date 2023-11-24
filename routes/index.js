import role from "./role.route.js";
import user from "./user.route.js";

// Combine all routes into a single route
const routes = [...role, ...user];

export default routes;

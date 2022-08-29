const router = require("express").Router();
const userRoutes = require("./comment-routes");
const thoughtRoutes = require("./pizza-routes");

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;

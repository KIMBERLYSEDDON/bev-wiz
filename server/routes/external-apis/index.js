const router = require("express").Router();
const nightOutAPI = require("./night-out-api");

router.use("/nightOutAPI", nightOutAPI);

module.exports = router;

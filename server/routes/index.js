const router = require("express").Router();
const apiRoutes = require("./api");
const externalAPIs = require("./external-apis");

router.use("/", externalAPIs);
router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send("Wrong route!");
});

module.exports = router;

const express = require("express");
const router = express.Router();
const digimonRoutes = require("./digimon_routes");

router.use("/digimons", digimonRoutes);

module.exports = router;
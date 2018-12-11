const express = require("express");
const router = express.Router();
const digimonRoutes = require("./digimon_routes");


router.use("/digimons", digimonRoutes);
router.use("/", (req, res)=>{
    res.render("welcome/welcome");
});

module.exports = router;
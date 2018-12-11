const express = require("express");
const router = express.Router();
const DigimonController = require("./../controllers/digimon_controller");

//the order of this routes matter
router.get("/", DigimonController.index);
router.post("/", DigimonController.create);
router.get("/new", DigimonController.make);
router.delete("/:id", DigimonController.destroy);
router.patch("/:id", DigimonController.update);
router.put("/:id", DigimonController.update);
router.get("/:id", DigimonController.show);
router.get("/:id/edit",DigimonController.edit);

module.exports = router;
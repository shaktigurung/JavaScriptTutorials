const express = require("express");
const router = express.Router();
const ContactController = require("./controllers/contact_controller");

router.get("/",ContactController.newResource);

router.get("/form",ContactController.newForm);

router.get("/enquiries", ContactController.enquiries);
//router.get("/enquiries/:id", ContactController.particular);

router.get("/contacts",ContactController.index);

router.post("/contacts",ContactController.create);

module.exports = router;
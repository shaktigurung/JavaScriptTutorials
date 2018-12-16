const express = require("express");
const router= express.Router();
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const {authorize, authorizeUser } = require("./../middleware/authentication_middleware");
const passport = require("passport");

router.use("/register", authorizeUser);
router.use("/login", authorizeUser);

router.get("/", PageController.index);
router.get("/register", AuthenticationController.register);
router.get("/login", AuthenticationController.loginForm);

router.post("/login", passport.authenticate('local', {
        successRedirect: "/dashboard",
        failureRedirect: "/login"
}));
router.post("/register", AuthenticationController.create);
router.get("/logout", AuthenticationController.logout);

//router.get("/dashboard", PageController.dashboard);
router.get("/dashboard", (req, res)=>{
        res.send('working');
})

module.exports = router;
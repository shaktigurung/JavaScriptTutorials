const express = require("express");
const router = express.Router();
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const {celebrate, Joi} = require("celebrate");
const {authorize, authorizeUser } = require("./../middleware/authentication_middleware");
const passport = require("passport");

router.use("/register", authorizeUser);
router.use("/login", authorizeUser);

router.get("/", PageController.index);

router.get("/login", AuthenticationController.loginForm );

router.post("/login", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), passport.authenticate('local', {
    //successRedirect: "/dashboard",
    failureRedirect: "/login",
    session: false
}), AuthenticationController.generateJWT);

router.get("/register", AuthenticationController.make);

router.post("/register",celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required()
    }
}), AuthenticationController.create);

router.get("/logout", AuthenticationController.logout);

//Using Session
//router.get("/dashboard", authorize ,PageController.dashboard)

//Using Json web token
router.get("/dashboard", passport.authenticate('jwt', {session: false}) ,PageController.dashboard)

module.exports = router;
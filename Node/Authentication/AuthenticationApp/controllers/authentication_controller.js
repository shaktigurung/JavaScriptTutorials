const UserModel = require("./../database/models/user_model");
const jwt = require("jsonwebtoken");


function loginForm(req, res){
    res.render("authentication/login_form");
}
async function loginVerify(req, res){
    //res.json(req.body);
    const {email, password} = req.body;
    const user = await UserModel.findOne({email});
    if (!user){
        return res.redirect("/login");
    }
    //varifies the user password
    const valid = await user.verifyPassword(password);

    if (!valid){
        return res.redirect("/login");
    }

    req.session.user = user;
    res.redirect("/dashboard");

}
function make(req, res){
    res.render("authentication/make");
}
async function create(req, res, next){
    //res.json(req.body);
    //const {email, password} = req.body;
    const user = await UserModel.create(req.body);
    // req.session.user = user;
    //res.redirect("/dashboard");
    // const token = jwt.sign({sub: req.user._id}, process.env.JWT_SECRET);
    // res.cookie("jwt", token);
    // //res.json(token);
    // res.redirect("/dashboard");

    //using passport
    // req.login(user, (err)=>{
    //     if(err){
    //         return next(err);
    //     }
    //     res.redirect("/dashboard");
    // });

    const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET);
    req.session.jwt = token;
    res.redirect("/dashboard");
}
function logout(req, res){
    //  req.session.destroy(()=>{
    //      res.redirect("/");
    //  });
    req.logout();
    //for cookie expiring
    res.cookie("jwt", null, {maxAge: -1});
    res.redirect("/");
}

function generateJWT(req, res){
    const token = jwt.sign({sub: req.user._id}, process.env.JWT_SECRET);
    res.cookie("jwt", token);
    //res.json(token);
    res.redirect("/dashboard");
}


module.exports = {
    loginForm,
    loginVerify,
    make,
    create,
    logout,
    generateJWT
}
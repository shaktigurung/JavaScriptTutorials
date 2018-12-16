function authorize(req, res, next){
    // if(!req.session || !req.session.user){
    //     return res.redirect("/login");
    // }
    if(!req.user){
        return res.redirect("/login");
    }
    next(); 
};

function authorizeUser(req, res, next){
    if(req.user){
        return res.redirect("/dashboard");
    }
    next();
};

module.exports = {
    authorize,
    authorizeUser
}
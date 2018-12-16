

function index(req, res){
    res.render("page/welcome");
}
function dashboard(req, res){
    res.render("page/dashboard");
}

module.exports={
    dashboard,
    index
}
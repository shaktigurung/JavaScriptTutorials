async function create(req, res, next){
    req.user.bookmarks.push(req.body);
     try{ 
         await req.user.save();
        res.json(req.user.bookmarks);
    } catch(err) {
        next(err);
    }
}

function index(req, res){
    return res.json(req.user.bookmarks);
}
module.exports = {
    create,
    index
}
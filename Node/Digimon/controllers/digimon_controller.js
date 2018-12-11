const DigimonModel = require("./../database/models/digimon_model");

async function create(req, res){
    let {name, weapon, kind} = req.body;
    let digimon = await DigimonModel.create({name, weapon, kind})
     .catch(err => res.status(500).send(err));
    //res.redirect(`/digimons/${digimon._id}`);
    res.json(digimon);
}

async function index(req, res){
    let digimons = await DigimonModel.find();
    //console.log(digimons);
    //res.render("digimon/index", {digimons});
    res.json(digimons);
}

async function make(req, res){
    res.render("digimon/new");
}
async function show(req, res){
    let {id} = req.params;
    let digimon = await DigimonModel.findById(id);
    //res.render("digimon/show", {digimon});
    res.json(digimon);
}
async function destroy(req, res){
    let {id} = req.params;
    await DigimonModel.findOneAndDelete(id);
    res.redirect("/digimons");
}
async function update(req, res){
    let {name, weapon, kind} = req.body;
    let {id} = req.params;
    await DigimonModel.findOneAndUpdate(id, {name, weapon, kind});
    res.redirect(`/digimons/${id}`);
}
async function edit(req, res){
    let {id} = req.params;
    let digimon = await DigimonModel.findById(id);
    res.render("digimon/edit", {digimon});
}


module.exports = {
    index,
    show,
    create,
    make,
    destroy,
    update,
    edit
}
//Continuous Integration Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

function add (x, y){
    if (!x || !y){
        throw "2 numbers are required";
    }
    return x + y ;
}

function subtract (x, y){
    if (!x || !y){
        throw "2 numbers are required";
    }
    return x - y ;
}

module.exports = {
    add,
    subtract
}
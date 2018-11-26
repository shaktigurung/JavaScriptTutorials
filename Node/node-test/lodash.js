//Common JS
function random(){
    console.log("My random function");
    return Math.random();
}

function times(number , callback){
    console.log("My times function");
    for(let i=0; i<number; i++){
        callback(i + 1);
    }
}

module.exports = {
    random,
    times
}
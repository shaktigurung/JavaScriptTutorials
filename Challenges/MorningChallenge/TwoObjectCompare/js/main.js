//console.log('this is test');
/*
//Write a JavaScript function named objectMatches to compare two objects to determine if the first object contains equivalent property values to //the second one.

objectMatches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })
//true

objectMatches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })
//false

objectMatches({ hair: 'long', beard: true }, {hair: 'short', beard: true })
//false
*/

function objectMatches(object1, object2){
    let equal = Object.toJSON(object1) == Object.toJSON(object2);
    console.log(equal);
}
objectMatches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true });
//true
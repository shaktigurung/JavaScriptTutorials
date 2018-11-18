//"use strict";
// function sum(a, b, ...params){
//     let add = (a + b + params);
//     console.log(add);
// }
// sum(1,3,4);


//reverse
function reverse(string, callback){
    let reverseString = string.split('').reverse().join();
    return callback(reverseString);
}
// let x = reverse("hi");
// console.log(x);

reverse("hi", function(string){
    console.log(string);
    reverse(string, function(string2){
        console.log(string2);
    });
});
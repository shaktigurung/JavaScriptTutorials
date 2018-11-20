//  document.querySelector("button").addEventListener("click", getUserData);
//  document.getElementById("display").addEventListener("click", getTweets);

// function getUserData(){
//        // document.getElementById("root").innerHTML = "starting the request";
    
//         $.ajax({
//             url:'http://localhost:3000/tweets.json',
//             type: 'POST',
//             data: {tweet: {message: `${document.getElementById("tweet").value}`}},
//             success: (data) =>{
//                 document.getElementById("root").innerHTML = data.message;
//             },
//             error: (error) =>{
//                 console.log("Error");
//                 console.log(error);
//             }
//         })
//     }

// function getTweets(){

//     $.ajax({
//         url: 'http://localhost:3000/tweets.json',
//         type:'GET',
//         success: (data) =>{
//             for(let i = 0;i < data.length;i++){
//                 $("ol").append(`<li> ${data[i].message} </li>`);
//             }  
//         },
//         error: (error) =>{
//             console.log("Error");
//             console.log(error);
//         }
//     })
// }

// function tweet(){
// let x = document.getElementById("tweet").value;
// document.getElementById("root").innerHTML = x;
// }

// $("#clean" ).click(function() {
//     $("ol").empty();
//     $("#root").empty();
//     document.getElementById("tweet").value = " ";   
//   });


/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z properties of the passed object.
*/

// "use strict";
// var obj = {
//   x: 5,
//   y: 20,
//   z: 3
// };

// // Write mult() function here
// function mult(obj){
//     // let answer = obj.x * obj.y *obj.z;
//     // return answer;

//     //Destructuring
//     let {x,y,z} = obj;
//     return x * y * z;
// }

// console.log(mult(obj));
// 300

/*Declare mult() function that will multiply values
of all the properties of the passed object as long as that property value is a number(explicitly)
hing: typeof
*/

// "use strict";

// var obj = {
//   x: 5,
//   y: 20,
//   z: 3,
//   a: "test",
//   b: true,
//   c: "3",
//   d: 2
// };

// // Write mult() function here
// function mult(obj){
//      let answer = [];
//     for (let i in obj){
//         if( typeof obj[i] === "number"){

//         }
        
//     }
//     //     if(isNaN(obj[i]))
//     //     {
//     //         console.log(obj[i]);
//     //     }
//     //     else {
//     //         return answer *= obj[i]; 
//     //     }
//     // }
// }
// console.log(mult(obj));


/* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.
*/

"use strict";

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

// Write code here
// a = arr.shift();
// b = arr.shift();
// c = arr;

//Destructuring arr and rest operator
[a,b, ...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
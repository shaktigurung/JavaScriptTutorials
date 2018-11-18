// let a = "This is 1";
// {
//     let b = "This is 2";
//     console.log(a);
//     console.log(b);
//     {
//         let c="This is 3";
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
// }
// console.log(a);
// console.log(b);
// console.log(c);
// let a = 1 + 1;
// console.log(a);
// let b = 2-1;
// console.log(b);
// let c = 6/2;
// console.log(c);
// let d = 45 * 4;
// console.log(d);
// let e = 10%3;
// console.log(e);
// let f = 2**3;
// console.log(f);
// let g = 1;
// g = g +2;
// console.log(g);
// g+=2;
// console.log(g);
// g++;
// console.log(g);
// let h = 5;
// h = h - 1;
// console.log(h);

// let x = 0;
// let y = -4;
// let z = y /x;
// console.log(z);

// Math.PI;
// 3.141592653589793
// Math.floor;
// ƒ floor() { [native code] }
// Math.ceil(1.3);
// 2
// Math.floor(1.3);
// 1

//*****Falsey Value******//
// 0 == false => true
// if (null){
//     console.log("truthy");
// }
// else{
//     console.log("Falsey");
// }
// Undefined, NaN( Not a number), "", Null, False , 0 

//Comparison Operator
//false == false

// let my_object_4 = {
//     name: "shakti",
//        age:35
// };
// my_object_4;
// {name: "Shakti", age: 35}

// let cohort = {};
// //console.log(cohort);
// cohort.size = 99;
// cohort["age"]= 43; 
// // console.log(cohort);
// // console.log(cohort.size);
// cohort.time = {
//     start: "20th August",
//     end: "January"
// };
// console.log(cohort);
// console.log(cohort.time.end);

//*****Function****/
// function adder(a, b){
//       console.log(arguments); // argument is predefined array of arguments
//      return a + b;
// }; 
// console.log(adder(1,2));
// function adder(){
//     let answer = 0;
//     for( let i =0; i < arguments.length; i++)
//     {
//         answer += arguments[i];
//     }
//     return answer;
// }
// console.log(adder(1,2,3,4,5,6)); //returns 21

//...args (//***** Rest parameter arguments***//)
// function adder(x, y, ...args){
//     console.log(args);
//     let answer = 0;
//     for( let i =0; i < arguments.length; i++)
//     {
//         answer += arguments[i];
//     }
//     return answer;
// };
// console.log(adder(1,2,3,4,5,6)); //returns [3,4,5,6]

//****Arrays ****//
// let people =["shakti", "ken", "Hameesh"];
// let cohort = ["natasha", "santosh", "ken", ...people];// spread operator
// console.log(cohort); //["natasha", "santosh", "ken", "shakti", "ken", "Hameesh"]

// let fav_birds = {"jess": "parrots", "David": "Eagle"};
// let {jess, tom, ...other_birds} = fav_birds;
// console.log(jess, tom, other_birds);

// function adder(args){
//     let {x,y} = args;
//     return x +y;
// };
// console.log(adder({y:1, x:3}));

//anonymous functions
//  let adder = ({x, y}) => {
//         return x + y;
//     };
// console.log(adder({y:1, x:4}));





//Challenges
// let user = "tom";
// let age;
// age = prompt("what is your age:");
// if (age==18){
//     console.log('Welcome to the casino!');
// }
// else{
//     alert('You are underaged');
// }
// if (user == "tom"){
//     console.log("Hello Tom");
// }
// else{
//     console.log("Hello Someone other than Tom");
// }


//Beast Mode
// let students = {};
// //students.push = "Sarah";
// for(let i=0; i<3; i++){
//  students[i] = prompt("what is your name:");
//  alert(students[i]);
// };
// console.log(students);


//Beast Mode++
// let students = [];
// for(let i=0; i<3; i++){
//     let student = {};
//  student["name"] = prompt("what is your name:");
//  student["age"] = prompt("what is your age:");
//  students.push(student);
// };
// console.log(students);

//*******Javascript Objects*****//

// let me = {
// age: 34,
// current_location: "Sydney",
// hobbies:["Cricket", "Travel", "Music"]
// };
// //delete me.age;
// for(let i=0;i < me.hobbies.length; i++){
//     console.log(me.hobbies[i]);
// };
//console.log(me);


// let me = {
// age: 34,
// current_location: "Sydney",
// hobbies:["Cricket", "Travel", "Music"],
// mother: {
//     name: prompt("what is your mother name:"),
//     age: prompt("what is her age:"),
//     location: prompt("where does she live:")
// },
// print_details: function(){
//     console.log(me.age);
// }
// };
//delete me.age;
// for(let i=0;i < me.hobbies.length; i++){
//     console.log(me.hobbies[i]);
// };
//me.hobbies.push = prompt("Enter the new hobby:");
//  me.hobbies.shift();
// console.log(me.print_details);

//Beast Mode++
const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };
//console.log(` State: ${coder_academy.sydney.state} Street: ${coder_academy.sydney.street}`);

//After Delete 
delete coder_academy.sydney.state;
console.log(` State: ${coder_academy.sydney.state} Street: ${coder_academy.sydney.street}`);
console.log(` State: ${coder_academy.brisbane.state} Street: ${coder_academy.brisbane.street}`);
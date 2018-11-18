//console.log("this is test");

// function adder(x, y, callback){
//     let answer = x + y;
//     if (callback){
//         return callback(answer);
//     }
//     return answer;
// }

// function shout(input){
//     console.log(`${input}!`);
//     console.log(answer);
//     return input;
// }
// function unrelated(){
//     console.log("I'm just here");
//     //console.log(answer);
//     //return "weird Value";
// }

// let answer = adder(1,2, unrelated);
// console.log(answer);


//Blocking = Synchronous
// function wait(ms){
//     let start = Date.now();
//     let now = start;

//     while(now - start < ms){
//         now = Date.now();
//     }
// }
// // wait(5000);
// // console.log("finished");

// document.getElementById("btn").addEventListener("click",()=>{
//     wait(2000);
//     alert("ran");
// });

//Non-Blocking - Asynchronous
// console.log(1);
// setTimeout(()=> {
//     console.log(2);
// },0);
// console.log(3);

//*********Call stack************//
// http://latentflip.com/loupe/?code=bGV0IGEgPSAxOwpmdW5jdGlvbiB4KCl7CiAgICByZXR1cm4gImhlcmUiOwp9CmZ1bmN0aW9uIHkoKXsKICAgIHJldHVybiB4KCk7Cn0KZnVuY3Rpb24geigpewogICAgcmV0dXJuIHkoKTsKfQp6KCk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


//onclick prints "clicked"
// document.querySelector("#btn").addEventListener("click", ()=>{
//     let joke = [];
//     for(let i =0; i<5;i++){
//       joke[i] = $.get("https://api.chucknorris.io/jokes/random", (data)=>{
//         //console.log(data.value);
//     });} 
//     console.log(joke); 
// });
// document.querySelector("#btn").addEventListener("click", ()=>{
//     $.get("https://api.chucknorris.io/jokes/random", (joke1)=>{
//         $.get("https://api.chucknorris.io/jokes/random", (joke2)=>{
//             $.get("https://api.chucknorris.io/jokes/random", (joke3)=>{
//                 $.get("https://api.chucknorris.io/jokes/random", (joke4)=>{
//                     $.get("https://api.chucknorris.io/jokes/random", (joke5)=>{
//                         let jokes = [joke1.value, joke2.value, joke3.value, joke4.value, joke5.value];
//                         console.log(jokes);
//                     });
//                 });
//             });
//         });
//     });
// });


// call 5 jokes from the api on one click
// function compileJoke(num,callback, arry=[]){
//     let url = "https://api.chucknorris.io/jokes/random";

//     $.get(url, (data)=> {
//         arry.push(data.value);

//         if (num===arry.length){
//             return callback(arry);
//         }
//         return compileJoke(num, callback, arry);
//     });
// }
// document.querySelector("#btn").addEventListener("click", ()=>{
//     compileJoke(5, (data)=>{
//         console.log(data);
//     });
// });

//Call back 
// function eraser(text, callback){
//     text = text.substr(0,3);
//     console.log("ke ho");
//     return callback(text);
    
// }
// function checkText(a){
//     console.log(`Oh what happened : ${a}`);
// }

// eraser("class is awesome", checkText);

//Beast Mode ++ Challenge
function addAndThenHalveAtSomePoint(a, b, callback){
    setTimeout((a,b) => {
        let answer = parseInt(a + b);
        setTimeout(()=>{
            answer = parseInt(answer / 2);
            return callback(answer);
                }, 2000);
    }, 3000);
}
let calculation = addAndThenHalveAtSomePoint(10, 20, (value)=>{
    console.log(value);
});

//Create a function that takes in a string and  returns a call back that is the reverse of that string, in the callback log the string, reverse it again ( should be original) and log that string
//Creat a function that adds all arguements given (number unknown) then calls a callback that answer in the callback log the answer
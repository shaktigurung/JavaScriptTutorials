//console.log('test');
//document.querySelector("button").addEventListener("click", getUserData);

//XHR
// function getUserData(){
//     //console.log("starting the request");
//     document.getElementById("root").innerHTML = "starting the request";

//     let request = new XMLHttpRequest();

//     request.open('GET', 'https://randomuser.me/api', true);

//     request.onload = () => {
//         if(request.status >= 200 && request.status < 400){
//             console.log(request.responseText);
//         }else{
//             console.log("Error");
//             console.log(request);
//         }
//     }
//     request.onerror = () =>{
//         console.log("Connection error");
//     }
//     request.send();
// }

//Jquery CORS
// function getUserData(){
//     document.getElementById("root").innerHTML = "starting the request";

//     $.ajax({
//         url:'http://localhost:3000/students.json',
//         type: 'POST',
//         data: {student: {name: 'John', location: 'Brisbane'}},
//         success: (data) =>{
//             console.log(data);
//         },
//         error: (error) =>{
//             console.log("Error");
//             console.log(error);
//         }
//     })
// }

//PROMISES

//document.querySelector("button").addEventListener("click", getJokes);

// function getJokes(){
//     return new Promise((resolve, reject) =>{
//         let url = "https://api.chucknorris.io/jokes/random";
//         //Code here
//         $.get(url, joke=> {
//             if (joke&& joke.value){
//                 resolve(joke.value);
//             }
//             reject(new Error("Could not retrieve joke"));
//         });
//     });
// }

// function getJokes(){
//     let jokes = [];
    
//     getJoke()
//         .then(joke => {
//             jokes.push(joke);
//             return getJoke();
//         })
//         .then(joke => {
//             jokes.push(joke);
//             return getJoke();
//         })
//         .then(joke => {
//             jokes.push(joke);
//             return getJoke();
//         })
//         .then(joke => {
//             jokes.push(joke);
//             return getJoke();
//         })
//         .then(joke => {
//             jokes.push(joke);
//             return getJoke();
//         })
//         .catch(error => console.log(error));
// }


    // let url = "https://api.chucknorris.io/jokes/random";
    // let jokes = [];

    // $.get(url, (joke1) => {
    //     $.get(url, (joke2) => {
    //         $.get(url, (joke3) => {
    //             $.get(url, (joke4 => {
    //                 $.get(url, (joke5) => {
    //                     let jokeArray =[
    //                         joke1.value,
    //                         joke2.value,
    //                         joke3.value,
    //                         joke4.value,
    //                         joke5.value,
    //                     ];
    //                     console.log(jokeArray);
    //                 });
    //             });
    //         });
    //     });
    // });


//Promise
// let x = 2;
// let y = 5;

// function adder(x,y){
// return new Promise((resolve, reject) => {
//     let answer = x + y;

//     if(isNaN(answer)){
//         reject("Input needs to be a number");
//     }
//     resolve(answer);
// });
// }
//Call adder 3 times. Each time taking the previous answer as the first input for the next call

// calculation.then().catch()
// adder(2,5)
//     //called when success
//     .then(answer1 =>{
//        return adder(answer1, 4)
//         .then(answer2 =>{
//            return adder(answer2, "messed up")
//             .then(answer3 =>{
//                console.log(answer3);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     })
//     //called when rejected
//     .catch(error => {
//         console.log("1st catch statement ran");
//         console.log(error);
//     });
//     console.log("ran before promises");
// })

//console.log(1);
//console.log(2);

// adder(2,5)
//     .then(answer1 =>{
//         return adder(answer1, 4);
//     })
//     .then(answer2 =>{
//         throw "garrets question";
//         return adder(answer2, 5);
//     })
//     .then(answer3 =>{
//         return adder(answer3);
//     })
//     .catch(error => {
//                 console.log("1st catch statement ran");
//                 console.log(error);
//             });
//     console.log("ran before promises");

//Promises with all feature *************
// function getJokes(){
//     let jokePromises = [
//         getJoke(),
//         getJoke(),
//         getJoke(),
//         getJoke(),
//         getJoke()
//     ];
//     Promise.all(jokePromises)
//         .then(jokes => {
//             console.log(jokes);
//         })
//         .catch(error => console.log(error));
// }


// Promises with race 
// function multiplier(x, y, secs){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             let answer = x * y;
//             if (isNaN(answer)){
//                 reject(new Error("Input needs to be numbers"));
//             }
//             resolve(answer);
//         }, secs * 1000);
//     });
// }
// let promises = [
//     multiplier(1,2,2),
//     multiplier(5, 10, 4),
//     multiplier(6,7,6)
// ];

// // Promise.all(promises)
// //     .then(answer => console.log(answer))
// //     .catch(error => console.log(error));

// Promise.race(promises)
// .then(answer => console.log(answer))
// .catch(error => console.log(error));


// Fetch API ***************
document.querySelector("button").addEventListener("click", getJokes);

function getJokes(){
    fetch("http://localhost:3000/students.json",{
        method: "POST",
        body: JSON.stringify({student:{name: "Sarah", location: "Sydney"}}),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
        .then(response =>response.json())
        .then(json=> console.log(json))
        .catch(error => console.log(error));
}
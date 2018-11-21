//console.log('test');
// let p = document.getElementById("my-paragraph");
// p.textContent = "Some sweet sweet text";

//document.getElementById("my-paragraph").innerHTML = "Some sweet sweet text";

// let newDiv = document.createElement("div");
// newDiv.textContent = "My new div";
// document.body.appendChild(newDiv);

// let firstP = document.querySelector("p");
// let form = document.querySelector("#page-form");

//let allPs = document.querySelectorAll("p");
// console.log(allPs);
//console.log(allPs[0].innerText);

//Returns Nodelist[NodeList(2) [li.odd, li.odd]]
// let odds = document.querySelectorAll(".odd");
// console.log(odds);

//let allPsArray = Array.from(allPs);
//console.log(allPsArray);

//assigning value to all "p" 's
//allPsArray.forEach((i)=> i.textContent = "Testing");
// Using map
//allPsArray.map((i)=> i.textContent = "garret");

// let div = document.querySelector("div");
// let p = div.querySelectorAll("p");
// console.log(p);

// let form = document.getElementById("page-form");
// let odds = document.getElementsByClassName("odd");
// let ps = document.getElementsByTagName("p");

// let li1 = document.querySelectorAll("li");
// let li2 = document.getElementsByTagName("li");
// let newLi = document.createElement("li");
// newLi.textContent = "new li";
// document.querySelector("ul").appendChild(newLi);

// //Clear DOM
// // let li3 = document.querySelector("li");
// // let ul = document.querySelector("ul");
// // ul.removeChild(li3);

// let li4 = document.querySelector("li");
// li4.parentNode.removeChild(li4);

// //Add to the top of the list of UL
// let newLi2 = document.createElement("li");
// newLi2.textContent = "Add to the top";
// document.querySelector("ul").prepend(newLi2);


//Adding a class
let title = document.querySelector("h1");
title.classList.add("blue");
//title.classList.remove("blue"); //to remove class
// title.classList.toggle("blue");


//  let formButton = document.querySelector("input[type=submit]");
// // formButton.value = "Click me Not";
// //assigning multiple attributes
// Object.assign(formButton, {
//     value: "I guess you can click",
//     id: "my-form-button"
// });

//Styling H1
// for(let i = 0; i< 200; i++){
//     title.style.marginLeft = `${i}px`;
// };

//Properties
//console.log(title.innerHTML);

//
// let newdiv = document.querySelector("");
// newdiv.innerHTML = "<p>Here</p>";


//Event Listeners*******************

// let button = document.querySelector("input[type=submit]");
// button.addEventListener("click", function(event){
//     event.preventDefault();
//     //console.log(event);
//     alert(event);
// });


//Adding ITEM to the list***********
// let button = document.querySelector("input[type=submit]");
// button.addEventListener("click", function(event){
//     event.preventDefault();
//     let textBox = document.querySelector("input");
//     let newLi = document.createElement("li");
//     newLi.textContent = textBox.value;
//     document.querySelector("ul").appendChild(newLi);
//     textBox.value ="";
// })

// let lis = document.querySelectorAll("li");
// lis = Array.from(lis);
// lis.forEach((i)=> i.addEventListener ("mouseenter",function(event){
//     console.log("entered a li");
// }));

//**** ****/

// let myButton = document.querySelector("input[type=submit]");
// myButton.addEventListener("click", function(event){
//     event.preventDefault();
//     event.target.value += "!"; // or this.value += "!";
// });

let div = document.querySelector("div");
let p = div.querySelector("p");
// div.addEventListener("click", function(){
//     alert("clicked div");
// },{passive: true}); 
//just to use event listener once {once:true}
//{capture: true} it executes its event before going to others
//{passive: true} turns off default

p.addEventListener("click", function(){
    event.stopPropagation(); //Stops event bubbling
    alert("p clicked");
});


//Remove event listener *********
div.addEventListener("click", function divClick(){
    alert("clicked div");
    div.removeEventListener("click", divClick);
});

//Remove item from another div

function titleClick(event){
    alert("titile was clicked");
}
document.querySelector("h1").addEventListener("click", titleClick());
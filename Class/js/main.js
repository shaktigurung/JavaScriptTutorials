//*********welcome to class;

// let object_1 ={};
// object_1.name ="Garret";
// object_1["age"] = 69;
// console.log(object_1);

// let student ={
//     name: "Bob",
//     age: 22,
//     address: {
//         street: "123 Saindra drive",
//         state: "NSW",
//         city:"Sydney"
//     }
// };
//console.log(student.address["street"]);
//all gives same outpus "123 Saindra drive"
//student.address.street;
//student["address"]["street"]

//********Object Constructor function
// let object2 = new Object();
// console.log(object2);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.awesome = true;
// }//
// let student = new Person("Sarah", 24);
// console.log(student);

// let student1 = new Person("Shauna", 22);
// console.log(student1);

//let student2 = new Person ("Sam", 20);
// console.log(student2);

//**** Proto-Type Inheritence *****//
// let now = new Date();
// console.log(now.__proto__);
//Person.prototype.country = "Australia";
//console.log(student2.country);
// student2.country = "USA";
// console.log(student2);

//Hero Object
// function Hero(name, level){
//     this.name = name;
//     this.level = level;
//     this.shout = function(){
//         return `My name is ${this.name}`;
//     }
// }
// let conan = new Hero("Conan", 100);
// let batman = new Hero("Batman", 60);
// console.log(conan.shout());
// console.log(batman.shout());

//Villian ***** Proper way to define Function outside Object
// function Villian(name, level){
//         this.name = name;
//         this.level = level;
//        }
// Villian.prototype.shout = function(){
//     return `I am the evil ${this.name}`;
// }
// let joker = new Villian("Joker", 100);
// let iceman = new Villian("Iceman", 60);
// console.log(joker.shout());
// console.log(iceman.shout());

// Number.prototype.talk = function(){
//     console.log("I am  a talking number");
// }
// let num = 32;
// num.talk();

//***** *****/
// function Human(){
//     this.legs = 2;
//     this.arms =2;
//     this.head=1;
// }

// Human.prototype.walk = function(){
//     return `Taking a stroll with my ${this.legs} legs`;
// }

// function Man(name){
//     Human.call(this); //Copies Properties
//     this.name = name;
// }
// let garret = new Man("Garret");
// console.log(garret); //Man {legs: 2, arms: 2, head: 1, name: "Garret"}
// Man.prototype = Object.create(Human.prototype); // assigning prototype function of Human into Man

// let bob = new Man("Bob");
// console.log(bob); //Man {legs: 2, arms: 2, head: 1, name: "Bob"}

// //******* ********/
// function Woman(name){
//     this.name = name;
// }
// Woman.prototype = Object.create(Human.prototype); //Copies Prototype
// let sally = new Woman("Sally");
// console.log(sally); //Woman {name: "Sally"}



//************ ES6 Classes*****//
// class Triangle{

// }
// let triangle = new Triangle();
// console.log(triangle);

/****Hoisting****/
// const p = myFunction(); 
// function myFunction(){
//     return " I am a p";
// }
// console.log(p);

//****** Classes*******//

// class Circle{

// }
// const c = new Circle();

// class Rectangle{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
// }
// let r = new Rectangle(20,10);
// //console.log(r);

// class Shape{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     area(){
//         return this.height*this.width;
//     }
// }
// let s = new Shape(20,10);
// console.log(s.area());
// Shape.prototype.colour = "red";
// console.log(s);

// class House{
//     static unlock(secretPassphrase){
//         if (secretPassphrase ==="please")
//         {
//             return "ok";
//         }
//         else
//         {
//             return "wrong";
//         }
//     }
// }
// let myHouse = new House();
// console.log(myHouse.unlock);


//******CLASSES with EXTENDS *****/
//parent class
class Shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height*this.width;
    }
}
//Child class inheriting from parent class "Shape"
class Square extends Shape{
    constructor(height, width){
        super(height,width);
    }
    isSquare(){
        return this.height === this.width;
    }
}
let sq = new Square(10,10);
// console.log(sq);
// console.log(sq.isSquare());
// console.log(sq.area());

Shape.prototype.talk = function(input){
    console.log(`I am a talking ${input}`);
}

class Octagon extends Shape{
    constructor(h,w){
        super(h,w);
    }
    speak(){
        super.talk("octagon");
    }
}

let oct = new Octagon(4,9);
console.log(oct.speak());
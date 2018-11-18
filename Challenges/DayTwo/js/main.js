// class Dog{
//     constructor(name, location){
//         this.name = name;
//         this.location = location;
//         this.distance = 0;
//     }
//     speak(){
//         console.log(`Woof! my name is ${this.name}`);
//     }
//     walk(location, distance){
//          this.distance += distance;
//          this.location += location;
//         //console.log(`Distance walked: ${this.distance} km`);
//     }
//     display_walks(){
//         console.log(`Display Walk: ${this.location}`);
//     }
//     total_distance(){
//         console.log(`Total Distance walked: ${this.distance} km`);
//     }
// }
// let d = new Dog("Jackey","Sydney:");
// d.walk("kelly st ",35);
// d.walk("Johnson st",30);
// d.speak();
// d.display_walks();
// d.total_distance();
// console.log(d.display_walks());
// console.log(d.total_distance());


//***** Beast Mode ******//
// class Walk{
//     constructor(location, distance){
//         this.location = location;
//         this.distance = distance;
//         this.time = new Date().getTime();
//         console.log(`Time:${this.time}`);
//     } 
// }
class Dog{
    constructor(name){
        this.name = name; 
        this.location = "";
        this.distance = 0;
    }
    speak(){
        console.log(`Woof! my name is ${this.name}`);
    }
    walk(location, distance){
         //let walk = new Walk(location, distance);
         this.distance += distance;
         this.location += location; 
         //document.getElementById("walk").innerHTML += `${this.distance} and ${this.location} </br>`;
    }
    display_walks(){
        console.log(`Display Walk: ${this.location} `);
    }
    total_distance(){
        //console.log(this.distance);
        //console.log(`Total Distance walked: ${this.distance} km`);
        document.getElementById("totalwalk").innerHTML = `Total Distance travelled: ${this.distance} km`;
    }
}

function dogDetail(d){
    distanceTravel = parseInt(prompt('How much did he walked in kms:'));
    travelLocation = prompt('what is the location:');
    d.walk(travelLocation, distanceTravel);
    document.getElementById("walk").innerHTML += `${distanceTravel} ${travelLocation} </br>`;
    d.total_distance();
}

let dogName = prompt('what is the name of dog:');
document.getElementById("dogname").innerHTML = `${dogName}`;
let d = new Dog(dogName);
document.getElementById("buttonID").addEventListener("click",() => dogDetail(d));






//let d = new Dog();
//  d.walk("Johnson st",30);
 //d.walk("son st",40);
// d.display_walks();
// d.total_distance();
// d.walk("kelly st ",35);
// d.display_walks();
// d.total_distance();
// d.walk("Json st",40);
// d.speak();
// d.display_walks();
// d.total_distance();





//import {unchangeableNumber, add, subtract} from './file1.js'; 
//import * as NewMath from './file1.js'; //adding namespace 
//import NewMath from './file1.js'; // when "export default " is used on export file
 //import lodash from './lodash.js';
//import {random} from './node_modules/lodash-es/lodash.js';
//  import _ from 'lodash';
//  import * as NewMath from './file1';

// console.log(NewMath.add(2,6));
// // console.log(NewMath.subtract(4,2));
// // console.log(NewMath.unchangeableNumber);

// console.log(_.random(20));
// console.log("Hello world");
// console.log("This is testing");

class Person{
    name = "Garret Bad Boi";
    static homosapien = true;
}

let teacher = new Person();

console.log(teacher.name);
console.log(Person.homosapien);
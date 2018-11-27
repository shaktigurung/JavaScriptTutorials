//write a Javascript program that returns the min and max values in an array
// only numbers count

//[1,2,3,4,5]
//[100, -3, -1000]
//["33", 5, 1]

// function minMax(arr){
//     let numArray = arr.sort();
//     let finalArray =[];
//     for(let i = 0; i < numArray.length; i ++){
//         if (isNaN(numArray[i])){
//             console.log(numArray[i] + "is Not a number");
//             continue;
//         }
//         else{
//             finalArray.push(numArray[i]);
//         }
       
//     }
//      console.log([finalArray[0],finalArray[finalArray.length - 1]]);
//     // console.log("MinValue:" + finalArray[0]);
//     // console.log("MaxValue:" + finalArray[finalArray.length - 1]);
// }


// //minMax([1,2,3,4,5]);
// //minMax(["33", 5, 1]);
// minMax([100, -3, -1000]);


//Get every nth element in an given array
//negative nth start from the end of the array
//nthElement ([1,2,3,4,5,6,8], 2)

// let numArray = (arr, pattern) => {
//     let ans = [];
//     ans = pattern < 0 ? ans.reverse() : ans;
//     arr.forEach((element, index) => {
//         if((index+1)%pattern === 0){
//             ans.push(element);
//         }
//     });
//     return ans;
// }

// let answer = numArray([1,2,3,4,5,6,8], -3);
// console.log(answer);


//ES6 Fat arrow
//Throw and error if either number is not a number
//catch that error outside of the function and log it to the console
//also throw an error for divison by 0

// function divide(x,y){
// return x/y;
// }

// let divide = (x,y) => {
    
//        if (typeof x === "number" && typeof y === "number"){
//             if (y === 0){
//                 throw "Cannot have Zero as denominator";
//             }
//             else{
//                 throw "Both input are Numbers";
//             }
//         }
//         else{
//             throw "Input is Not a number";   
//         }
 
//         let answer = x/y;
//         console.log(answer);
// }

// try {
//  console.log(divide(2,0));
// // divide(4,2);
// // divide(2,"8");
// } catch(err){
//     console.log(err);
// }


// Write a function that separates a string of comma separated 

    function separate(str){
        //let arr = [];
        //let res = str.split();
        // for (let i = 0; i < res.length ; i++){
            
        //     arr.push = res[i];
        // }
        // return arr;
        let pattern = new RegExp(/\w[^,]*/, 'g');
        return str.match(pattern);
    }
   console.log(separate("garret, santosh, shakti, 20 , 40"));
// values into an array without using .split()


//Create a Runner class that has the properties, name, distance and place
//Create a method that adds distance to an instance of runner and modifies their place and the other runners places
//Create a method on the Runner class that shows the names of the runners in order from first place to last
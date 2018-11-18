//Challenge 1

//let activities =[];
//let checker = true;
//while(checker){
    //console.log('you reached maximum limit');
    //activities.shift();
    // for(let i=0; i<2;i++){
    // let activity ={};
    // activity["greet"] = prompt("what you did yesterday:");
    // activity["fav_color"] = prompt("what is your favorite color:");
    // activity["sport"] = prompt("what sport do you like:");
    // activity["movie"] = prompt("which is your fav movie:");
    // activity["place"] = prompt("which is your favourite place:");
    // activities.push(activity);
    // };
    // console.log(activities);
//};


//Challenge 2 (Atomic Blonde Number)

//  let num =[];
//  let abn = prompt('what is the number:');
//  let new_num = abn.split('');
//  let sum = 0;
//  let multi =1;

// for(let i=0; i<new_num.length;i++){
//     console.log(new_num[i]);
//     sum += parseInt(new_num[i]);
//     multi *= parseInt(new_num[i]);
// }
// if(sum === multi){
//     console.log('Number is Atomic Blonde Number');
// }
// else{
//     console.log('Number is NOT Atomic Blonde Number');
// }

//Challenge 3
let num = prompt('what is the number:');

if ( num === 6174){
    console.log("You reach the point");
}
else{
    Calculate(num);
}


function Calculate(num){
let check =[];
check = num.split('').map(i => parseInt(i));
let numOne = check.sort();
let num1 =numOne.join('');
console.log(num1);
let numTwo = numOne.reverse();
let num2 =numTwo.join('');
console.log(num2);
let numThree = parseInt(num2 - num1);
console.log(numThree);
}












// let keep='';
// for(let i=0; i<check.length;i++){
//     //let keep = parseInt(check[i]);
//     if((parseInt(check[i]))< (parseInt(check[i+1])))
//     {
//         console.log('it is small number');
//     }
//     else{
//         console.log('it is big number');
//     }
// };
// console.log(keep);
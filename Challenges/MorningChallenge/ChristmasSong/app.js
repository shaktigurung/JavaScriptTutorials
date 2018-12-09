// const days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];

// const gifts = [
//     "And a partridge in a pear tree.\n",
//     "Two turtle doves",
//     "Three French hens",
//     "Four calling birds",
//     "Five golden rings", 
//     "Six geese a-laying",
//     "Seven swans a-swimming",
//     "Eight maids a-milking",
//     "Nine ladies dancing",
//     "Ten lords a-leaping",
//     "Eleven pipers piping",
//     "Twelve drummers drumming"    
// ]

const express = require('express');
const app = express();
const port = 3000;

function christmasSong(){
    
    var prompt = require('prompt');
    prompt.start();
    prompt.get(['hello'], function (err, result) {
      console.log('you typed ' + result.hello);
    });
    let number = 2;
    switch (number) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    // switch (days) {
    //     case first:
    //      gifts = "And a partridge in a pear tree";
    //       break;
    //     case second:
    //       gifts = "Two turtle doves";
    //       break;
    //     case third:
    //     gifts= "Three French hens";
    //       break;
    //     case fourth:
    //       gifts= "Four calling birds";
    //       break;
    //     case fifth:
    //       gifts= "Five golden rings";
    //       break;
    //     case sixth:
    //       gifts= "Six geese a-laying";
    //       break;
    //     case seventh:
    //       gifts= "Seven swans a-swimming";
    //   }   
      console.log(day);
}

christmasSong(2);

app.listen(port, ()=>{
    console.log(`Server runnning on port ${port}`);
})
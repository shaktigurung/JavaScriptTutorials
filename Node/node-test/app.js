//Creates a new File node.txt
// const fs = require("fs");

// fs.appendFile("node.txt", "Hello there!", (err)=> {
//     if(err) throw err;
//     console.log("File was created");
// });

//Reads a new File node.txt
// const fs = require("fs");

// const contents = fs.readFileSync("node.txt", "utf8");
// console.log(contents);
//****************************************** */


// const myLodash = require("./lodash");
// const npmLodash = require("lodash");

// console.log(myLodash.random());
// myLodash.times( 2, i=> {
//     console.log(`${i} iteration`);
// });

// console.log(npmLodash.random(200));

// let build = npmLodash.times(2, i =>{
//     return i;
// });
// console.log(build);
//****************************************** */

// require("./setup");
// console.log("Code after setup");
// console.log(myFavNumber);

const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What's your name"
   },
  {
    type: 'list',
    name: 'color',
    message: 'What color do you like?',
    choices: ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta','Cyan','White', 'Gray', 'RedBright','GreenBright', 'YellowBright', 'BlueBright', 'MagentaBright', 'CyanBright', 'WhiteBright'],
    filter: function(val) {
      return val.toLowerCase();
    }
  }

])
  .then(answers => {
    //   let color = answers.color;
    //   let name = answers.name;
      
      let {color, name} = answers;
        color = color.toLowerCase();

        if(!chalk[color]){
            throw "sorry I don't know that color";
        }
        console.log(chalk[color](name));
       // console.log(chalk.blue(answers));
  })
  .catch(error => console.log(error));

  
//Exceptions Error
// throw "My error";

// function CustomError(message){
//     this.message = message;
//     this.name = "CustomError";
// }

// throw new CustomError("Something went wrong");

//******* TRY and CATCH *****//
// try{
//     throw "Oops something went wrong";
// }catch(error){
//     console.log(`Error: ${error}`);
// }

//******* TRY and CATCH and Finally *****//
// try{
//     console.log('try block ran');
//     throw "oops";
//     console.log(2);
// } catch(error){
//     console.log(`Caught the error: ${error}`); //Get Executed only if we throw error

// }finally{
//     console.log("finally block ran");
// }


//******* Nested TRY and CATCH*****//
// try{
//     console.log(1);
//     try{
//         console.log(2);
//         throw "e";
//     } catch(err){
//         console.log(3);
//         throw "i";
//     }
// }catch(error){
//     console.log(`Caught the error: ${error}`);
// }


//******* Function with TRY and CATCH*****//
// function subtractTwoThings(things1,things2){
//     let answer;
//     try{
//         answer = things1 -things2;
//         if (isNaN(answer)){
//             throw 'Invalid input';
//         }
//         return answer;
//     }catch (error){
//         console.log(error);
//         return null;
//     }
// }

//let calculation = subtractTwoThings(43, "Bobby"); //Invalid input  null
// let calculation = subtractTwoThings(43, 10);
// console.log(calculation);

//******* We can separate function and Try catch *****//
// function subtractTwoThings(things1,things2){
//     let answer;
//         answer = things1 -things2;
//         if (isNaN(answer)){
//             throw 'Invalid input';
//         }
//         return answer;
// }

// try{
//     let calculation = subtractTwoThings(43, 10);
//     console.log(calculation);
// }catch(error){
//     console.log(error);
// }

//******* new Error *****//
// try{
//     throw new Error("my error");
// } catch(error){
//     console.log(error.__proto__);
//     console.log(error.message);
//     console.log(error.name);
// }

//******* Custom Error *****//
// class GarretError extends Error{
//     constructor(...params){
//         super(...params);
//         this.name = "GarretError";

//         if (Error.captureStackTrace){
//             Error.captureStackTrace(this, GarretError);
//         }
//     }
// }
// try{
//     throw new GarretError("my error");
// }catch(error){
//         console.log(error.stack);
//         console.log(error.message);
//         console.log(error.name);
//     }

/*****************************************
//******* Functional Programming *****/
/******************************************/
// let dog = "FIDO";
// function myDog(dog){
//     //var dog = "Fido";
//     console.log(dog);
// }
// myDog("Homer");
// console.log(dog);

//In BLOCK variable
    // {
    //     var dog = "Fido";
    //     console.log(dog);
    // }
    // console.log(dog);

// let cat ="Fluffy";
// function haircut(){
//     cat = "Hairless";
// }
// console.log(cat);
// haircut();
// console.log(cat);

//******* NESTED FUNCTION *****//
// function parentFunc(a){
//     let b = 1;
//     function nestedFunction(d ,e){
//         return d + e;
//     }
//     return nestedFunction(a,b);
// }

// let answer = parentFunc(5);
// console.log(answer);

//******* "Closures" are function which wrap and return *****//
// let makeAdder = (a) => {
//     let c =20;
//     return (b) => {
//         return a + b + c;
//     }
// }
// let addFive = makeAdder(5);
// let answer = addFive(6);
// console.log(answer);


//******* Multiple inheritance with MIXINS *****//
// let humanMixin = function(Base){
//     return class extends Base{
//         walk(){
//             return `I like walking`;
//         }
//     }
// }
// let calculatorMixin = function(Base){
//     return class extends Base{
//         area(){
//             return this.width * this.height;
//         }
//     }
// }
// class Shape{
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     talk(input){
//         return `Hey I am a talking ${input}`;
//     }
// }

// class Square extends humanMixin(calculatorMixin(Shape)){
//     constructor(height, width){
//         super(height, width);
//     }
//     shout(){
//         return super.talk("square") + "!";
//     }
// }

// let square = new Square(10,10);

// console.log(square.height, square.width);
// console.log(square.shout());
// console.log(square.area());
// console.log(square.walk());


//********* XML Extensive Markup Language **********//
//store and transport data
/* <cohurt> 
    <student>
        <name> k. West </name>
        <nickname> YE </nickname>
        <dateOfBirth>1977-06-08</dateOfBirth>  
    </student>   
    <student>
        <name> k.Graham </name>
        <nickname> YEman </nickname>
        <dateOfBirth>1978-06-08</dateOfBirth>  
    </student> 
</cohurt> *////}

//Javascript
// let cohort = [
//     {
//         name:"k.West", nickname:"YE",dateOfBirth: "1977-06-08"},
//         name:"k.Graham", nickname:"YEman",dateOfBirth: "1978-06-08"}
//     }
// ]

//Json
let cohort = "[{ \"name\": \"K. West\", \"nickname\": \"Ye\", \"dateOfBirth\": \"1977-06-08\"},{ \"name\": \"A. Grham\", \"nickname\": \"Drake\", \"dateOfBirth\": \"1986-10-24\"}]";
let parsed = JSON.parse(cohort); //JSON into Javascript//
//jsonString = JSON.stringify(parsed); // change back to JSON//
console.log(parsed[0].name);
console.log(parsed);
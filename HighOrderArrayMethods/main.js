const companies= [
    {name:"Company One",category: "Retail", start:1981 ,end:2002 },
    {name:"Company Two",category: "Auto", start:1987 ,end:1996 },
    {name:"Company Three",category: "Finance", start:1989 ,end:2010 },
    {name:"Company Four",category: "Technology", start:2011 ,end:2018 },
    {name:"Company Five",category: "Finance", start:1984 ,end:2004 },
    {name:"Company Six",category: "Retail", start:1975 ,end:1995 },
    {name:"Company Seven",category: "Retail", start:1991 ,end:2001 },
    {name:"Company Eight",category: "Auto", start:1997 ,end:2017 },
    {name:"Company Nine",category: "Technology", start:1984 ,end:2004 },
    {name:"Company Ten",category: "Retail", start:1985 ,end:2015 }
];
const ages = [32,23,15,45,61,12,5,19,36,51,74,9,22];



//**************FOREACH***********************//
//with normal For loop
// const allcomp = [];
// for(let i=0; i< companies.length; i++){
//     allcomp.push(companies[i]);
// }
//with forEach
 //companies.forEach(company=>console.log(company));

//**************FILTER***********************//
//Normal for loop for 21 and older
//const canDrink = [];
// for(let i=0; i < ages.length; i++){
//     if(ages[i]>= 21){
//         canDrink.push(ages[i]);
//     }
// }

//with filter
// const canDrink = ages.filter(function(age){
//     if(age>=21){
//         return true;
//     }
// })

//filter with Arrow function
// const canDrink = ages.filter(age => age>=21 );
// console.log(canDrink);

//Get an array of Companies in Retail Categories

// const retailCompanies = companies.filter(function(company){
//     if(company.category === "Retail"){
//         return true;
//     }
// });

//Using Arrow function
// const retailCompanies = companies.filter(company=> company.category === "Retail");
// console.log(retailCompanies);

//Get Companies which started on 80s

// const eightiesCompany = companies.filter(function(company){
//     if(company.start >=1980 && company.start <1990){
//         return true;
//     }
// });

//with arrow function
// const eightiesCompany = companies.filter(company => company.start >=1980 && company.start <1990);
// console.log(eightiesCompany);

//Companies that lasted atleast 10 years

// const companylasted = companies.filter(function(company){
//     if((company.end - company.start) >= 10){
//         return true;
//     }
// });

//with arrow function
// const companylasted = companies.filter(company =>(company.end - company.start) >= 10);
// console.log(companylasted);

//**************MAP***********************//

//Create Array of Company Names

//const companyName = companies.map(company => company.name);
//console.log(companyName);

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

//with arrow function
// const testMap = companies.map(company=>`${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

//square root of ages

// const agesSquare = ages
// .map(age=> Math.sqrt(age))
// .map(age=>age*2);

// console.log(agesSquare);

//**************SORT***********************//

// const sortCompany = companies.sort(function(a, b){
//     if(a.start > b.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });

//with arrow function
// const sortCompany = companies.sort((a,b)=> (a.start > b.start ? 1 : -1));
// console.log(sortCompany);

//Sort ages
// const sortAges = ages.sort(function(a, b){
//     return a-b;
// });
//arrow function
// const sortAges = ages.sort((a, b)=> a-b);
// console.log(sortAges);

//**************REDUCE***********************//
//reduce
//Sum of all the ages
// let agesSum=0;
// for(let i=0; i<ages.length; i++){
//     agesSum += ages[i];
// }
//With reduce method
// let agesSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

//with arrow function
// let agesSum = ages.reduce((total,age)=> total+age, 0);
// console.log(agesSum);


//Get total years for all companies

// let totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start);
// },0);

//Arrow function
// let totalYears = companies.reduce((total, company)=> total + (company.end - company.start),0);

// console.log(totalYears);
//**************COMBINE METHOD***********************//

const combined = ages
.map(age=> age*2)
.filter(age=> age>=40)
.sort((a,b)=> a -b)
.reduce((total,age)=> total+age,0);

console.log(combined);
// normal function
    
// function sum(x, y){
// return 0;
// };
// let a = 5;
// let b = 7;
// let total = sum(a, b);
// console.log("total:", total);

// division
// function division(x,y){
//     let total=x/y;
//     return total;
// }
// let c =12;
// let d = 4;
// let total= division(c,d);
// console.log(total);

// function subtraction(x,y){
//     return(x-y);
// }
// let e = 50;
// let f = 10;
// let totalsubtraction = subtraction(e,f);
// console.log(totalsubtraction);

// function fullName(firstName, lastName, age){
//     return 'Your first Name' + ' ' + firstName + ' ' + 'last Name'+ ' ' + lastName + '. Your age'+ ' ' + age;
// }  

// const yourName = fullName('abir', 'ahmed' , 22);
// console.log(yourName);
  
function gold(ana){
    let vori = ana/16;
    return `64 ana = ${vori} vori`;
}
// let output = gold(64);
// console.log(output)
// user value 64.
// output: 64 ana = 4 vori
// user value 10000
// output: 10000 metter =  Kilometer

// anonymous function
// let sum = function(num1, num2){
//     return num1 + num2;
// };

// arrow function
// let sum = (num1, num2) => num1 + num2;
// parameter num1, parameter num2
// let sum = (num1, num2) => {
//     let total = num1 + num2;
//     return total * total;
// };
// console.log(sum(10, 20)); argument pass 10, 20

// higher order function
// function sum(num1, num2, add){
//     return add(num1, num2)
// };
// let add = (number1, number2) => number1 + number2;
// console.log(sum(30, 20, add))
// IIFE
(function (name){
    console.log(name)
})("alif")

let x = 100;
x %= 10;


// console.log(x);




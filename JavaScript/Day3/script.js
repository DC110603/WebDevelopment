// Var 
// var is global/functional scope
//var can be reassigned and redecleared

// var a=10;
// var a=20;
// console.log(a);


// let 
// let can be reassigned but not re declared 
// let variables are in block scope

// let a=10;
// a=20;
// console.log(a);


// const
// const cannot be redeclared or reassigned it is a constant variable
// const variables have block scope

// const a = 10;
//  const a=10;
// console.log(a);


//FUNCTIONS

// function myFunc(){
//     console.log("Function called")
//     console.log("Function ended")
// }

// myFunc()


// Here the second functin is called even though the function call is after the first function 
// this is because of the concept called function hoisting 
// it shifts all the functions to the top of the script while compiling so that the functions can be called from anywhere

// function myFunc(){
// console.log("Function 1 called");
// console.log("Function 1 ended");
// }
// myFunc()

// function myFunc(){
// console.log("Function 2 called");
// console.log("Function 2 ended");
// }


// switch case
//  var num1 = 10;
//  var num2 = 20;
//  var op = "*";
// switch(op){
//     case "+":
//         console.log(num1 + num2)
//         break;
//     case "-":
//          console.log(num1 - num2)
//         break;
//     case "*":
//          console.log(num1 * num2)
//         break;
//     default:
//         break;
// }
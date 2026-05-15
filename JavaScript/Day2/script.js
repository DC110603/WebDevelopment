"write a program to print even number"

//for(var i=0;i<50;i++){
   // if (i%2===0){
      //  console.log(i)
  //  }
//}

// var num1=21
// var fc=0
// for(var i=2;i<=(num1**0.5)+1;i++){
//     if(num1%i===0){
//         fc++
//     }
// }
// if (fc===0 && num1>1){
//     console.log(num1+" is a Prime Number")
// }else{
//     console.log(num1+" is not a prime nnumber")
// }

// function primeNumber(p){
//     for (var i=2;i<=(p**0.5)+1;i++){
//         if (p%i===0){
//             return false;
//         }
//     }return true;
// }
// var p=11
// if (primeNumber(p)){
//     console.log(p+" is a Prime Number")
// }else{
//     console.log(p+" is not a Prime Number")
// }


// function factNum(p){
//     if (p===1 || p===0){
//         return 1;
//     }
//     return p*factNum(p-1);
// }
// console.log(factNum(5))

var num1=1221
var newNum=0
var temp=num1
while (temp>0){
    r=temp%10
    newNum=newNum*10+r
    temp=Math.floor(temp/10)
}
if (num1===newNum){
    console.log(num1+" is palindrome Number")
}else{
    console.log(num1+" is not palindrome Number")
}
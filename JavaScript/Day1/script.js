var num1 = 1900;
if (num1%4 === 0){
    if (num1%100 === 0){
        if (num1%400 === 0){
            console.log(num1+" is Century leap year")
        } else{
            console.log(num1+" is not leap year")
        }
        
    }else{
        console.log("Leap Year")
    }
}else {
    console.log("Not a Leap Year")
}
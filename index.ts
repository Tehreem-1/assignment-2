//Task 1 
interface operate{
    (num1:number , num2:number):number | string 
}
function calculate(num1:number , num2:number , operation:operate):void
{   const result = operation(num1 , num2)
    console.log('The result is :',result )}




function add(num1:number , num2:number ):number{

    return num1 + num2
}

function subtract(num1:number , num2:number):number{

    return num1 - num2
}

function multiply(num1:number , num2:number):number{

    return num1  * num2
}

function divide(num1:number , num2:number):string | number{
    if (num2 !==0){
        return num1 / num2 
    }
    else{
        return ("Error ! Cannot divide by zero")
    }
}


calculate(5,5,add)
calculate(5,2,subtract)
calculate(2,2,multiply)
calculate(1,0,divide) 











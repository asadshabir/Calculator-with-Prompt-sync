
let prompt:any = require ("prompt-sync")()

let number1 = parseInt(prompt("Enter First Number :"))
let number2 = parseInt(prompt("Enter Second Number :"))
let operator = prompt(`Enter Any Operator > +, -, *, /, % :` )
if (operator === `+`) {
    console.log(`Your Answer ${number1} ${operator} ${number2} = ${number1+number2}`);} 
else if (operator == `-`) {
    console.log(`Your Answer ${number1} ${operator} ${number2} = ${number1 - number2}`);} 
else if (operator == `*`) {
    console.log(`Your Answer ${number1} ${operator} ${number2} = ${number1 * number2}`);} 
else if (operator == `/`) {
    console.log(`Your Answer ${number1} ${operator} ${number2} = ${number1 / number2}`);} 
else if (operator == `%`) {
    console.log(`Your Answer ${number1} ${operator} ${number2} = ` + Math.floor(number1/number2*100));
}else {
        console.log("Please Select Valid Operator");
        
    }



export{}
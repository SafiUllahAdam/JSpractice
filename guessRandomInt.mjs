import PromptSync from "prompt-sync";
import randomInteger from "random-int";
import random from "random-int";

//random number
let num=parseInt(randomInteger(0,100));
let number=num;
console.log(number);

let prompt=PromptSync();

let score = 100;
let userPrompt=parseInt(prompt("Enter The number  "));  
//user input
while (userPrompt =! number) {
    score = score-1;
    let userPrompt=parseInt(prompt("Enter The number  "));
    if (userPrompt === number) {
        console.log("Congratulations you have guessed the correct number");
        console.log(`You guessed the correct number in ${100 - score} attempts ` );
    }
    else if ( userPrompt>number && userPrompt<100) {
        console.log("Your number is greater than random number");}
    
    else if ( userPrompt<number && userPrompt0) {
        console.log("Your number is smallerr than random number");
}
}
import random from "random-int";
import PromptSync from "prompt-sync";
import randomInteger from "random-int";

//Find the number between 0-100 and then from user input compare it
let randomnum = randomInteger(0, 100);
console.log("Random Number got selected between 0-100 is " + randomnum);

let prompt = PromptSync();
let prompt1 = prompt("Enter the number to compare  ");

if (prompt1 > randomnum) {
  console.log("User entered number is greater  ");
}
else {
  console.log("Number is smaller");
}

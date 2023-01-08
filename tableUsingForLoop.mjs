//Create table of any number of user choice
import random from "random-int";
import promptsync from "prompt-sync";

let prompt=promptsync();
let number=parseInt(prompt("Enter the number you wish to display table : "));
console.log("Here is the table of " +number );
for (let i =1 ; i < 11; i++) 
{
    console.log(number+ "*" +i  +"="+ +number*i);
}
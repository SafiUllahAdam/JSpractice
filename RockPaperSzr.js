import randomIntegar from "random-int";
import promptsync from "prompt-sync";

//Available Choices

let choices=["Rock", "Paper", "Scissor"];
console.log("Available choices are " +choices);
let userPrompt = ("0 for Rock, 1 for Paper, 2 for Scissor");
let outcome = ("Ready to Play ");

//Computer Choice
let computerChoice=randomIntegar(0,2);
console.log("Computer Chooses" +computerChoice); 

let computerChoiceName=choices[computerChoice];
console.log("Computer Choose Name is" +computerChoiceName);

//User Choice
let prompt= promptsync();
let userValue = prompt(userPrompt);
console.log (userValue);
let userChoice = choices[userValue];
console.log (userChoice);

if (computerChoice === userChoice) {
    outcome = "Draw";
}
elseif (computerChoice=="Rock" && userChoice=="Paper"); {
    outcome = "Computer Wins"
}
console.log(outcome)
//PROGRAM: CALCULATE 2 Values
//import promptsync from "prompt-sync";


// let num1=6;
// let num2=2;
// let prompt=promptsync();
// let operator= prompt("Enter the function either + or - you want to perform :  " ) ; 


// function calculator(a, b, c) {
//     if (c === "+") {
//         console.log(`Addition of ${a} and ${b} is : `+ (a+b));
//     } else {
//         console.log(`Subtraction of ${a} and ${b} is : `+ (a-b));
//     }
// }
// calculator(num1,num2,operator);


//PROGRAM: WELCOME TO WEBSITE 

// function welcomewebsite(name="Hello") {
//     console.log(` ${name} , Welcome to the website`);
// }
// welcomewebsite();
// welcomewebsite("Safi");

//PROGRAM: ORDER IN CAFE
// function destinocafe(order="Expresso") {
//     console.log(`Wait a while your ${order} is being prepared`);
// }
// destinocafe("Latte");
// destinocafe("Cold Coffee");
// destinocafe("White Expresso");


// //PROGRAM with RETURN
// function destinocafe(order="Coffee") {
//     return(`Wait a while your ${order} is being prepared`);
// }
// let order=destinocafe(prompt("Enter what you want to order at destino: "));    //for return we will have to lock it in some variable 
// console.log(order);                //then console that variable

//PROGRAM CALCULATOR with RETURN
// function calculator(x,y) {
//     let result= x + y;
//     return result
// }
// let result=calculator(10,30);
// console.log(result);
// let result2=calculator(40,10);
// console.log(result2);

//ARROW FUNCTION
// let welcome= (name) => `Hello ${name} How are you doing today`
// console.log(welcome("Safi"));

// let order = () => {
//     console.log("Welcome to Destino");
// }
// order();

//THIS in OBJECT

let objecs = {
    name: "Safi",
    age: 22,
    occup: "Student",
    games: "PUBG",
    sports: "Cricket",
    hobbies() {
        console.log("I Love  " +this.games+ " , " +this.sports  + " And many more");
    }
}
objecs.hobbies();
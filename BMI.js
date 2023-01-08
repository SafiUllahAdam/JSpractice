let height=parseInt(prompt("Enter Your Height  in Inches")) ;
console.log("Your Height in inches is "  +height );

let heightincm= height * 2.54 ;
console.log("Your Height in cm is "  +heightincm );
let heightinm= height * 0.01 ;



let weight=parseInt(prompt("Enter Your Weight in Pounds")) ;
console.log("Your weight in Pounds is "  +weight );


let weightinkg= weight * 0.454 ;
console.log("Your weight in cm is "  +weightinkg );

let logBMI=weightinkg / (heightinm*heightinm)
console.log("BMI LOG IS  "  +logBMI );

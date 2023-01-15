//pushing elements in array from object
let arrayy = [];

let things = {
    mobile : "MI" ,
    tab : "xiaomi",
    laptop : "apple"
}
for (const key in things) {
    console.log(things[key]);
}
arrayy.push(things);
console.log(arrayy);
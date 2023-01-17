// ARRAY METHODS 
// JOIN  , joins the array elements using given word 

let a = [1, 2, 3, 4, 5];
let b = a.join("-");
console.log(b);      //1-2-3-4-5

//POP , returns the last/poped value in new array and updates the original value
let c = [1, 2, 3, 4, 5];
let d = c.pop();
console.log(d);      //c becomes , c = 1,2,3,4 & d= 5

//PUSH, add the new element in the end of the array & returns the length of array

let e = [1, 2, 3, 4, 5];
let f = e.push(8, 9, 10);
console.log(f);         //length of array i.e 8


//SHIFT , similar to pop just remove 1st element of array and returns it
let g = [8, 2, 3, 4, 5];
let h = g.shift();
console.log(h);          //deletes 1st element & returns it i.e 8

//UNSHIFT, similar to push but adds elements in start of array and return length
let i = [8, 2, 3, 4, 5];
let j = i.unshift();
console.log(j);           //5

//Splice , adds new element in own choice place in array (point of change, how many elements to delete, values)
let k = [8, 2, 3, 4, 5];
let l = k.splice(3, 1, 8, 9);
console.log(k);           //8,2,3,8,9,5

//SLice , print out a specific portion out of array and prints it
let m = [8, 2, 3, 4, 5];
let n = m.slice(2, 4);
console.log(n);           //3,4




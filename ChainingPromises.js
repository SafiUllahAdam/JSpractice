// let fs = require('fs');

// console.log('1');

// fs.readFile('test.txt', 'utf8', function(error, data) {
//     if (error) {
//          throw error;
//     }

//     console.log('2');
// });

// console.log('3');

// //PROMISE 

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('hello world');
//     }, 2000);
// });

// promise.then(function(data) {
//     console.log(data + ' 1');
// });

// promise.then(function(data) {
//     console.log(data + ' 2');
// });

// promise.then(function(data) {
//     console.log(data + ' 3');
// });




// //CHAINING PROMISES

// var promise = job1();

// promise

// .then(function(data1) {
//     console.log('data1', data1);
//     return job2();
// })

// .then(function(data2) {
//     console.log('data2', data2);
//     return 'Hello world';
// })

// .then(function(data3) {
//     console.log('data3', data3);
// });

// function job1() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 1');
//         }, 1000);
//     });
// }

// function job2() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve('result of job 2');
//         }, 1000);
//     });
// }


// let a = "we are the best develepors in the world!";
// let b = "the world!";
// let c = a.indexof(b);

// if(c!==-1) {
//   a= a.slice(0,c) + a.slice(c+b.length);
// }

// let f = (nr) => 5;
// var c = function(b) {
//   a=a+3;
//   return b+a;
// } (2);
// conosle.log(c);


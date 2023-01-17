// const promise = new Promise (function (resolve, reject) {
//     resolve("This is a promise function")
// });

// promise.then(function (success) {
//     console.log(" success : " , success);
// }).catch(function (errorr) {
//     console.log("error : ", errorr);
// })

const myPromisee= new Promise ( ( resolve, reject )  => {
    resolve("Hello, I am resolved : ")
} 
)
async function myFunct() {
    const resolvedvalue = await Promise;
    console.log (resolvedvalue);
}
myFunct();

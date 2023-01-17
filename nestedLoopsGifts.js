//Nested Loop for shop

let products=["Shirts","Ties","Jeans"];
let gifts=["pen","keychain","cup"];

//Applying nested loops

for (let i = 0; i < products.length; i++) {
    // console.log("Products available in shop at the moment : " +products[i]);
    for (let j = 0; j < gifts.length; j++) {
        console.log(products[i]+ '-'  +gifts[j]);    }
}
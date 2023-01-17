let myTable=[];

let values=6;

for (let i = 0; i < values; i++) {
    let temporary=[];
    for (let j = 0; j < values ; j++) {
        temporary.push(i*j);
    }
    // console.log(temporary);
    myTable.push(temporary);
}

console.table(myTable);
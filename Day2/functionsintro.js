function greeting(name) {
 console.log(`Hello, ${name}`);
}

function getTip(total, percentage) {
    let tipAmount = total * percentage  // 0.15, 0.18
     return tipAmount;
}

//console.log( getTip(100, 0.22) );

let whatDoIPay = getTip(100, 0.15);

//console.log("Kevin pays " + whatDoIPay); 




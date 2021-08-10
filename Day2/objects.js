// OBJECTIVE: simple objects, go into food and students object, iterate through objects 


let link = {
    items: ['sword', 'bow', 'boomerang'],
    hearts: 9,
    stamina: 9,
    companion: "Fairy", 
    crush: "Zelda"
    
}

console.log(link.items[1]); 

let inst = {
    name: "Arturo",
    food: "Escamoles"
}

let st2 = {
    name: "Andrew",
    food: "Sushi"
}

let st3 = {
    name: "Frank",
    food: "Encebollado" 
}


let students = [st2, st3, inst, ]; 

for(let i = 0; i < students.length; i++) {
    console.log(`The sutdent ${students[i].name} like to eat ${students[i].food}`);
}
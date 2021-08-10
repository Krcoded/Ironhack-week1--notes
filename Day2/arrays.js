// splice, split, forEach, in functions, index 

const favCars = ['ferrari', 'Pagani', 'Porsche', 'Lamborgini']; 
const grades = [80, 20, 94, 56, 76, 78, 72];



// iterating through normal loop
for (let i = 0; i < 3; i++);

// //with arrow function 
// foods.forEach((cat) => {
//     console.log(cat); });



//create a function that takes an array as an arguement 
// and prints all the values inside of the array

function printArray(array) {
    for (let i=0; i < array.length; i++) {
        console.log(array[i]);
    }
}


// Lazy way > good way 
const arraysToGoThrough = [foods, favCars, students];
    arraysToGoThrough.forEach((array) => {
        printArray(array);
    })


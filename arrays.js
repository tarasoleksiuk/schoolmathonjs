console.clear();
console.log('\x1Bc'); // Очищення консолі

//Arrays
let alphabet = ['a', 'b', 'c', 'd', 'e'];
// console.log(alphabet[2]);;
// console.log('~ alphabet', alphabet);

let arrOfNumbers = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

//Print out 4, 8, 11

// console.log(arrOfNumbers[0][3]);
// console.log(arrOfNumbers[1][2]);
// console.log(arrOfNumbers[2][0]);

//console.log(arrOfNumbers.length);

//Objects

//Create an object called car with properties
//1. Make
//2.Model
//3.isUsed
//Ad a function called makeNoise which  logs out Vroom
//Ad a function called makeBeep which  logs out Beep another way


let car = {
  make: 'Ford',
  model: '3134',
  isUsed: true,
  makeNoise() {
    console.log('Vroom');
  },
  makeBeep: function () {
    console.log('Beep');
  },
};

//console.log(car.isUsed); //dot notation


//console.log(car['make']); //brackets notations

//brackets notations example

const property = 'model';
//console.log(car[property]);

//Create an object called a book with the following properties
// 1. Title - string
//2. Authoe - object with the propperties name and age

let book = {
    title: "The Lord of The Rings",
    author: {
        name: 'Steve Hockings',
        age: '77',
    },
}

console.log(book.title);
console.log(book.author.name);
console.log(book.author.age);

//Undefined -> No error
console.log(book.what);

//Modifying

book.title = 'New Title';
book.author.name = 'New Author';

console.log(book);

//list of variables -> Arrays
//collection of variables -> Objects

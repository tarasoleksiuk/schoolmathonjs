console.clear();
console.log('\x1Bc'); // Очищення консолі
//------

//Function return the objects

// function getNewObj (name,surname){
// return {name:name, surname:surname};
// }

// let newObj = getNewObj('Andriy','Clean');

// console.log(newObj);


//New

//Function - Constructor

// function Human (name, surname){
//     //this = {}
//     this.name = name;
//     this.surname = surname;
//     this.introduceYourself = function (){
//         console.log('Hi my name is ' + this.name);
//     }
//     //return this
// }

// Human.prototype.introduceYourSurname = function () {
//     console.log('Helo my surname is ' + this.surname);
// }

// let person1 = new Human('Tarik','Key');
// console.log(person1);
// person1.introduceYourself();
// person1.introduceYourSurname();


//This

//Class

// class Human {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//         this.saySurname = function() {
//             console.log('My surname is ' + this.surname);
//         }
//     }
//     sayName () {
//         console.log('Hi, I am '+ this.name );
//     }
// }

// let person2 = new Human('Davud','Onko');
// person2.sayName();
// person2.saySurname();

// console.log( person2);


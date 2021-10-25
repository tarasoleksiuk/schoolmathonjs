console.log('\x1Bc');
console.clear();

//callback function
function getMessage(nameOfCity, callback) {
  callback(`Ваша посилка буде відправлена у ${nameOfCity}`);
}

function setDayGreetings(elem) {
  elem += `\nДоброго дня!`;
  console.log(elem);
}
function setNightGreetings(elem) {
  elem += `\nДоброго вечора!`;
  console.log(elem);
}

//arrow function
function printName(name) {
  console.log(name);
}

let printNameArrow = (name) => {
  console.log(name);
};

//one-line arrow
function printHi(name) {
  return 'Hi ' + name;
}

let printHiArrow = (name) => 'Hi ' + name;

//callback with arrow dunction

function greatPerson(name, callback) {
  callback(name);
}

//greatPerson('Tarik', elem => console.log('Hello ' + elem));

// closures
function myCounter(){
  let counter = 0;
  return function addToCounter(){
    counter = counter + 1;
    return counter;
  }
}

let counter1 = myCounter();

console.log(counter1());

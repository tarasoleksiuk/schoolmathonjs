console.clear();
//closures

// function expressions vs function declaration

//function declaration

function myFunctionDeclaration() {
  return 1;
}

// function expressions

let myFunctionExpression = function () {
  return 2;
};

//console.log(myFunctionDeclaration());
//console.log(myFunctionExpression());

//Copy function
let myFunctionDeclarationCopy = myFunctionDeclaration; // without () -> function in text
console.log('~ myFunctionDeclarationCopy', myFunctionDeclarationCopy);

//Paste result of function
let myFunctionDeclarationResult = myFunctionDeclaration(); // with () -> result of function -> 1
console.log('~ myFunctionDeclarationResult', myFunctionDeclarationResult);

//Closures

function createCounter() {
  let a = 0;
  //console.log('~ a', a);

  return function () {
    a += 1;
    console.log(a);
  };
}

let counter1 = createCounter; //copy
let counter2 = createCounter(); // Result
let counter3 = createCounter();

// counter2();
// counter2();
// counter2();
// counter2();

// counter3();
// counter3();

//console.log(counter1);
//console.log(counter2);
//console.log(counter2());

//Як викликати внутрішню функцію з зовнішнього середовища?

function findAreaOfRectangle(height = 0,weight = 0) {
  let a = height; 
  console.log('~ a', a);
  let b = weight;
  console.log('~ b', b);
  
  makeNoize(); // Виконається. Тобто при замиканні всі функції з області видимості ініціалізуються і якщо є виклик ->() то запустяться

  function makeNoize(){
    console.log('BOOM!');
  }
  
  return function () {
    return a * b;
  };
  makeNoize(); // Не Виконається

}

let rectangle1 = findAreaOfRectangle(5,10);
console.log('~ rectangle1', rectangle1());

let rectangle2 = findAreaOfRectangle();
console.log('~ rectangle2', rectangle2());

let rectangle3 = findAreaOfRectangle(7,11);
console.log('~ rectangle3', rectangle3());

let rectangle4 = findAreaOfRectangle(6,9);
console.log('~ rectangle4', rectangle4());


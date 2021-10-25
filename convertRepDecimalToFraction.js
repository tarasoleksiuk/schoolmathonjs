console.log('\x1Bc');
console.clear();
/*
Правило перетворення нескінченного переіодичного дробу в звичайний:
Для того щоб перетворити нескінчений періодичний дріб на звичайний,
треба від числа, що стоїть до другого періоду, відняти число,
що стоїть до першого періоду. Потім записати цю різницю чисельником,
а в знаменнику записати цифру 9 стільки разів, скільки цифр у періоді, 
а після дев'яток дописати стільки нулів, скільки цифр стоїть між комою і першим періодом.
*/ 

let denominator = ''; //знаменник
let numerator = ''; //чисельник
let numbersAfterCommaAndBefore1periody; //Чисел після коми і до першого періоду
let rowOfZeros = ''; //Рядок 0 - кількістю чисел після коми і до першого періоду
let rowOfNines = ''; //Рядок 9 - кількістю чисел в періоді
let numbersInPeriod = 0; //Чисел в періоді
let do2periodyNum; // число до 2-го періоду
let do1periodyNum; // число до 1-го періоду
const NINE = 9;
const ZERO = 0;
const ONE = 1;

//знаходимо кількість цифр у періоді. Знаходимо індекс закритої і відкритої душки.
function getNumbersInPeriod(strNumber) {
  let indexOfOpeningBracket = strNumber.indexOf('(');
  let indexOfClosingBracket = strNumber.indexOf(')');
  //Різниця індексів '(' і ')' -1 (т.я починаєм з 0) і буде відповідати кількості цифр у періоді
  //Записуємо результат
  numbersInPeriod = indexOfClosingBracket - indexOfOpeningBracket - ONE;
  return numbersInPeriod;
  //console.log(numbersInPeriod);
}

//Знаходимо число до 1-го періоду
function getNumberBefore1period(strNumber) {
  //2.5(317)=>25
  let indexOfOpeningBracket = strNumber.indexOf('('); //Індекс душки
  let numberBefore1periodWithDecimal = strNumber.slice(0, indexOfOpeningBracket); // Вирізаєм все до "("
  //Записуємо результат
  do1periodyNum = numberBefore1periodWithDecimal.replace('.', ''); // число до 1-го періоду без крапки
  do1periodyNum = parseInt(do1periodyNum); //Перетворюємо в тип даних Number
  return do1periodyNum;
  //console.log('~ do1periodyNum', do1periodyNum);
}

//Знаходимо число до 2-го періоду
function getNumberBefore2period(strNumber) {
  //2.5(317)=>25317
  //Видаляємо крапку і дужки
  let pattern = /[^a-zA-Z0-9_]/g; //\W
  //Записуємо результат
  do2periodyNum = strNumber.replace(pattern, '');
  do2periodyNum = parseInt(do2periodyNum); //Перетворюємо в тип даних Number
  return do2periodyNum;
  // console.log('~ do2periodyNum', do2periodyNum);
}

//Знаходимо кількість чисел після коми і до першого періоду
function getNumbersAfterCommaAndBefore1periody(strNumber) {
  let indexOfPoint = strNumber.indexOf('.');
  let indexOfOpeningBracket = strNumber.indexOf('('); //Індекс душки
  let numbersBetweenDotAndOpeningBracket = strNumber.slice(
    indexOfPoint + 1,
    indexOfOpeningBracket
  );
  //Записуємо результат
  //Чисел після коми і до першого періоду
  numbersAfterCommaAndBefore1periody =
    numbersBetweenDotAndOpeningBracket.length;
  return numbersAfterCommaAndBefore1periody;
}

function concatRowOfNinesToDenopinator() {
  for (let i = 0; i < numbersInPeriod; i++) {
    denominator += NINE;
  }
}

function concatRowOfZerosToDenopinator() {
  for (let i = 0; i < numbersAfterCommaAndBefore1periody; i++) {
    denominator += ZERO;
  }
}

function convertRepDecimalToFraction(strNumber) {
  getNumbersInPeriod(strNumber);
  getNumbersAfterCommaAndBefore1periody(strNumber);
  concatRowOfNinesToDenopinator();
  concatRowOfZerosToDenopinator();
  getNumberBefore1period(strNumber);
  getNumberBefore2period(strNumber);

  //Записуємо в чисельник і знаменник
  numerator = do2periodyNum - do1periodyNum;
  return `${numerator} / ${denominator} `;
}

//ТЕСТИ
let someStrNum = '0.(2)';

console.log(`Перетворимо нескінчений періодичний дріб ${someStrNum} на звичайний `, convertRepDecimalToFraction(someStrNum));

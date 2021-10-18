console.log('\x1Bc'); // Очищення консолі
/*
Задачі:
1) Функція, яка подає число в стандартному вигляді
2) Правило перетворення нескінченного переіодичного дробу в звичайний
3) Перетворення періодичного дробу у звичайний за допомогою геометричної прогресії
4) Правило перетворення нескінченного періодичного дробу в звичайний (приклад)
//5) Правила порівняння
6) Таблиця подільності натуральних чисел
7) Округлення чисел
//8) Модуль
9) Просте натуральне число
10) НСК
//11) Розкласти складне число на прості множники
12) НСД
13) Складене натуральне число
14) Взаємно прості числа
15) Подати мішане число у вигляді неправильного дробу
16) Зведення дробу до найменшого спільного знаменника
17) Звичайним дробом називають
18)Алгоритм ділення в стовпчик
*/

//8) Модуль
function module(a) {
  return Math.abs(a);
}

function moduleRule(a) {
  if (a > 0) return a;
  if (a < 0) return -a;
  if (a == 0) return 0;
}
//Тест модуля
//test = moduleRule(-10 + 5);
//console.log(test);

//5) Правила порівняння
function compareTwoRealNum(a, b) {
  if (a - b > 0) {
    return `${a} > ${b} or ${b} < ${a}`;
  }
  if (a - b < 0) {
    return `${a} < ${b} or ${b} > ${a}`;
  }
  if (a === b) {
    return `${a} = ${b}`;
  }
}
//Тест порівняння
// test = compareTwoRealNum(1.1,3);
// console.log(test)

//11) Розкласти складне число на прості множники

function decomposeNumber(number) {
  const PRIME_NUMBERS_OUTPUT = []; //Масив для збереження простих чисел
  const FIRST_PRIME_NUMBER_2 = 2; // Перше просте число 2
  let nextPrimeNumber = 3; //Наступне просте число = 3

  while (number % FIRST_PRIME_NUMBER_2 == 0) {
    PRIME_NUMBERS_OUTPUT.push(FIRST_PRIME_NUMBER_2);
    number /= FIRST_PRIME_NUMBER_2;
  }
  //Якщо number = 1, це значить, що останнє просте число знайдене - можна завершити
  if (number == 1) {
    return PRIME_NUMBERS_OUTPUT;
  }
  //Якщо number НЕ ділиться націло на 3, знайти наступне просте число
  if (number % nextPrimeNumber !== 0) {
    getNextPrime(nextPrimeNumber);
  }

  while (number % nextPrimeNumber == 0) {
    PRIME_NUMBERS_OUTPUT.push(nextPrimeNumber);
    number /= nextPrimeNumber;
    if (number == 1) {
      return PRIME_NUMBERS_OUTPUT;
    }
    //Якщо число НЕ ділиться націло на поточне просте число, то переходимо до наступного простого числа
    if (number % nextPrimeNumber !== 0) {
      getNextPrime(nextPrimeNumber);
    }
  }
  // Поки number не буде ділитись націло на "поточне просте число" то переходити до наступного простого числа (збільшувати поточне число на 2)
  function getNextPrime(currentPrime) {
    while (number % currentPrime !== 0) {
      currentPrime = currentPrime + 2;
    }
    nextPrimeNumber = currentPrime; // Присвоюємо наступне просте число
  }
}

//Тест порівняння
// test = decomposeNumber(532950);
//console.log(test);

// let multiplyArr = test.reduce((a, b) => a * b, 1);
// console.log('multiplyArr', multiplyArr);cle

//Ділення на одноцифрове число
function longDivision(divident, divisor) {
  //Переводимо числовий формат в текстовий
  let dividentStr = String(divident);
  let divisorStr = String(divisor);
  //Довжина відповіді
  let resultLength = 0;
  //Перша цифра діленого
  let firstNumberOfDivident = parseInt(dividentStr[0]);
  //Неповне ділене
  let incompletelyDivided = 0;
  //console.log(`Перша цифра діленого ${firstNumberOfDivident}`);

  console.log(`Ділене = ${dividentStr} Дільник = ${divisorStr}`);

  //Перевірка чи ділиться ділене на дільник
  if (divident % divisor == 0) {
    console.log(`Ділене ${divident} ділиться на ${divisor} націло`);
  } else {
    console.log(`Ділене ${divident} НЕ ділиться на ${divisor} націло`);
  }

  // 1. Визначаємо яка буде відповідь для цього провіряємо першу цифру в діленому.
  //Якщо вона більша дільника - то відповідь буде такої довжини як і число, якщо менше то довжина відповіді буде складатись (довжина дільника - 1).
  //Проставляємо кількість крапок в частці, щоб не запутатись.
  if (firstNumberOfDivident >= divisor) {
    resultLength = dividentStr.length;
    console.log(`Відповідь складається із ${resultLength} цифр`);
  } else {
    resultLength = dividentStr.length - 1;
    console.log(`Відповідь складається із ${resultLength} цифр`);
  }
  //Знаходимо перше неповне ділене. Якщо довжина результату = довжині діленого то взяти 1 цифру, якщо ні то взяти 2 цифри
  if (resultLength == dividentStr.length) {
    incompletelyDivided = dividentStr[0];
    console.log(`Неповне ділене ${incompletelyDivided}`);
  } else {
    incompletelyDivided = dividentStr[0] + dividentStr[1];
    console.log(`Неповне ділене ${incompletelyDivided}`);
  }
  //Якщо 1-неповне ділене поділити на дільник буде = 1, то неповне ділене дорівнює дільнику - записуємо 1 в частку
  if (incompletelyDivided == divisor) {
    console.log(`Перше неповне ділене  = дільнику, записуємо 1 в частку`);
    result = +1;
  }
  // 2. Зменшуємо перше неповне ділене на 1 допоки це число не буде ділитися на дільник націло.

  // 3. Знайдене число ділимо на дільник і результат записуємо в частку.
  // 4. Від першого неповного діленого віднімаємо це число і результат записуємо знизу.
  // 5. Перевіряємо - якщо результат менший від дільника то ми підібрали число в частці правильно.
  // 6. Зносимо наступну цифру, щоб отримати наступне неповне ділене.
  // 7. Перевіряємо, якщо після зносу, неповне ділене менше 0 дільника то в частку записуєм 0, і зносимо наступну цифру з діленого.
  // 8. Якщо неповне ділене буде дорівнювати 0 і у частці буде кількість цифр, що ми визначили на першому етапі, то ми знайшли результат ділення націло.
}



/*
Найменшим спільним кратним (НСК) кількох натуральних чисел називають,
найменше число, яке ділиться без остачі на кожне з даних чисел. 
НСК (даних) чисел дорівнює - Добутку одного з них на прості множники, 
яких нема у його розкладі, але є у розкладах решти чисел.
*/

function getNsk(a, b) {
  let primaryOfA = decomposeNumber(a);
  let primaryOfB = decomposeNumber(b);
  let uniqPrimaryNumbers; //масив для унікальних простих чисел
  //Видаляємо з primaryOfA дублікати в primaryOfB
  for (let i = 0; i < primaryOfB.length; i++) {
    for (let j = 0; j < primaryOfA.length; j++) {
      if (primaryOfB[i] === primaryOfA[j]) {
        primaryOfA.splice(j, 1);
        break;
      }
    }
  }
  //Поєднуємо всі унікальні числа з двох розрядів в один масив
  uniqPrimaryNumbers = primaryOfA.concat(primaryOfB);

  //Перемножаємо прості множники першого числа на унікальні прості множники другого
  let result = uniqPrimaryNumbers.reduce(function (previousValue,currentValue) {
    return previousValue * currentValue;
  });
  console.log(result);
  return result;
}

//Тест
getNsk(336, 108);

//////////////////////////////////////////////////////////////
//Функція розкладу числа на прості множники (повертає масив)//
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

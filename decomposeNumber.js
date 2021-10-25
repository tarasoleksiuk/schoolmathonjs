//Розкласти складне число на прості множники

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
test = decomposeNumber(532950);
console.log(test);

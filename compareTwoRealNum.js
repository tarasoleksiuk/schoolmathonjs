//Правила порівняння
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
  test = compareTwoRealNum(1.1,3);
  console.log(test)
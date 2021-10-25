//Модуль
function module(a) {
    return Math.abs(a);
  }
  
  function moduleRule(a) {
    if (a > 0) return a;
    if (a < 0) return -a;
    if (a == 0) return 0;
  }
  //Тест модуля
  test = moduleRule(-10 + 5);
  console.log(test);
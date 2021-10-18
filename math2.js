console.log('\x1Bc');

function longDivision(n, d) {
  var num = n + '',
    numLength = num.length,
    remainder = 0,
    answer = '',
    i = 0;

  while (i < numLength + 3) {
    var digit = i < numLength ? parseInt(num[i]) : 0;

    if (i == numLength) {
      answer = answer + '.';
    }

    answer = answer + Math.floor((digit + remainder * 10) / d);
    remainder = (digit + remainder * 10) % d;
    i++;
  }
  return parseFloat(answer);
}
//callback function
function getMessage(nameOfCity, callback) {
  callback(`Ваша посилка буде відправлена у ${nameOfCity}` );

}

function setDayGreetings(elem){
  elem+= `\nДоброго дня!`
  console.log(elem);
}
function setNightGreetings(elem){
    elem+= `\nДоброго вечора!`
    console.log(elem);
  }



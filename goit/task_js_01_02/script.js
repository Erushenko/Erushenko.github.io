//part 1
function pow(base, exponent) {

    if (exponent <0){
      return  0;
    }

    var result = 1;

    for (var i=0;i<exponent;i++){
      result *= base;
    }

    return result;
}

var base      = prompt('Укажите число, которое будет возводиться в степень:', 1);
var exponent  = prompt('Укажите степень возведения:', 1);
//
console.log(pow(base,exponent));

//
// part 2
var arrNames = [];
var arrUserNames = [];
//
for (var i=0;i<5;i++){
  arrNames.push( prompt('Введите любое имя:', "") );
}
for (var i=0;i<5;i++){
  arrUserNames.push( prompt('Введите имя пользователя:', "") );
}
for (var i=0;i<5;i++){
  var findUser = false;
  for (var j=0;j<5;j++){
    if (arrNames[i] === arrUserNames[j]) {
      findUser = true;
    }
  }
  if (findUser) {
    alert('' + arrNames[i] + ', вы успешно вошли.');
  } else {
    alert('' + arrNames[i] + ', не найдено такого пользователя.');
  }
}

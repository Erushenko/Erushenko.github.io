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
var UserName;
//
for (var i=0;i<5;i++){
  arrNames.push( prompt('Введите любое имя:', "") );
}

UserName =  prompt('Введите имя пользователя:', "");

var findUser = false;
for (var i=0;i<5;i++){
  if (arrNames[i] === UserName) {
    findUser = true;
  }
}

if (findUser) {
  alert('' + UserName + ', вы успешно вошли.');
} else {
  alert('' + UserName + ', не найдено такого пользователя.');
}

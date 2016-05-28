function changeCheck_js(el)
/*
	функция смены вида и значения чекбокса
	el - span контейнер для обычного чекбокса
	input - чекбокс
*/
{
     var el = el,
          input = el.getElementsByTagName("input")[0];

     if(input.checked)
     {
	     el.style.backgroundPosition="0 0";
		 input.checked=false;
     }
     else
     {
          el.style.backgroundPosition="0 -17px";
		  input.checked=true;
     }
     return true;
}
function startChangeCheck_js(el)
/*
	если значение установлено в on, меняем вид чекбокса на включенный
*/
{
	var el = el,
          input = el.getElementsByTagName("input")[0];
     if(input.checked)
     {
          el.style.backgroundPosition="0 -17px";
      }
     return true;
}

function startCheck_js()
{
	/*
		 при загрузке страницы заменяем проверяем значение чекбокса в указанном контенере.
		 если чекбоксов несколько, нужно будет несколько раз вызвать функциую с нужными id
	 */
	startChangeCheck_js(document.getElementById("niceCheckbox_1"));
  startChangeCheck_js(document.getElementById("niceCheckbox_2"));
  startChangeCheck_js(document.getElementById("niceCheckbox_3"));
}

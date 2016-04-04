var createDOM = {
  body: document.body,
  curentUl: null,
  addHElementInDOM: function(nameClass, type, context){
    // debugger;
    newElement = document.createElement(type);
    newElement.innerHTML = context;
    newElement.classList.add(nameClass);
    this.body.appendChild(newElement);
  },
  addButtomElementInDOM: function(nameClass, type, context){
    newElement = document.createElement(type);
    newElement.innerHTML = context;
    newElement.setAttribute('type', 'submit');
    newElement.classList.add(nameClass);
    this.body.appendChild(newElement);
  },
  addAnswer: function(context){
    divElement = document.createElement('div');
    divElement.classList.add("checkbox");
    this.body.appendChild(divElement);
    //label
    labelElement = document.createElement('label');
    divElement.appendChild(labelElement);
    //input
    inputElement = document.createElement('input');
    inputElement.setAttribute('type','checkbox')
    inputElement.setAttribute('value','')
    labelElement.appendChild(inputElement);
    //context qustion
    labelElement.innerHTML += context;
  },

  addQuestionInDOM: function(context, arrAnswers){
    this.addHElementInDOM('text-left','H2', context);
    for (var i = 0; i < arrAnswers.length; i++) {
      this.addAnswer(arrAnswers[i]);
    }
  },

  addQuestionAllInDOM: function(arrQuestions){
    for (var i = 0; i < arrQuestions.length; i++) {
      this.addQuestionInDOM(arrQuestions[i]);
    }
  }
}

// debugger;

createDOM.addHElementInDOM('text-center','H1','Тест по программированию');

createDOM.addQuestionInDOM('1. Вопрос №1',['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']);
createDOM.addQuestionInDOM('2. Вопрос №2',['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']);
createDOM.addQuestionInDOM('3. Вопрос №3',['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']);

createDOM.addButtomElementInDOM('center-block','button','Проверить мои результаты');

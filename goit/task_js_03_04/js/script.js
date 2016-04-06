var createDOM = {

  questions:[
    {
      title: 'Вопрос №1',
      answers:[
        {content:'Вариант ответа №1'},
        {content:'Вариант ответа №2'},
        {content:'Вариант ответа №3'}
      ]
    },
    {
      title: 'Вопрос №2',
      answers:[
        {content:'Вариант ответа №1'},
        {content:'Вариант ответа №2'},
        {content:'Вариант ответа №3'}
      ]
    },
    {
      title: 'Вопрос №3',
      answers:[
        {content:'Вариант ответа №1'},
        {content:'Вариант ответа №2'},
        {content:'Вариант ответа №3'}
      ]
    }

  ],
  body: document.body,
  createQuestions: function(){

    //style to conteiner
    var css = '.well {width:1000px; margin:auto;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    //main container
    divElement = document.createElement('div');
    divElement.classList.add('well');
    this.body.appendChild(divElement);
    this.body = document.getElementsByClassName('well')[0];
    //to creat content
    this.addHElementInDOM('text-center','H1','Тест по программированию');
    for (var i = 0; i < this.questions.length; i++) {
      this.addQuestionInDOM(this.questions[i]);
    }
    this.addButtomElementInDOM('center-block','button','Проверить мои результаты');
  },
  addQuestionInDOM: function(question){
    this.addHElementInDOM('text-left','H2', question.title);
    for (var i = 0; i < question.answers.length; i++) {
      this.addAnswer(question.answers[i]);
    }
  },
  addAnswer: function(answer){
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
    //content qustion
     labelElement.innerHTML += answer.content;
  },
  addHElementInDOM: function(nameClass, type, context){
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
  }
}
createDOM.createQuestions();

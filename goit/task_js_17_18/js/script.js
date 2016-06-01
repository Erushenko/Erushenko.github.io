'use strict';

var testing = {
  questions:[
    {
      title: 'Вопрос №1',
      name: 'question1',
      answers:[
        {content:'Вариант ответа №1', answer: false},
        {content:'Вариант ответа №2 (true)', answer: true},
        {content:'Вариант ответа №3', answer: false}
      ]
    },
    {
      title: 'Вопрос №2',
      name: 'question2',
      answers:[
        {content:'Вариант ответа №1 (true)', answer: true},
        {content:'Вариант ответа №2', answer: false},
        {content:'Вариант ответа №3', answer: false}
      ]
    },
    {
      title: 'Вопрос №3',
      name: 'question3',
      answers:[
        {content:'Вариант ответа №1', answer: false},
        {content:'Вариант ответа №2', answer: false},
        {content:'Вариант ответа №3 (true)', answer: true}
      ]
    }
  ],
  saveQuestions: function(){
    // debugger
    var strObj  = JSON.stringify(this.questions);
    localStorage.setItem("testingQuestins", strObj);
  },
  loadQuestions: function(){
    var strObj  = localStorage.testingQuestins;
    this.questions = JSON.parse(strObj);
    console.log('this.questions',this.questions);
  },
  getResult: function(){
    var elQuestions = $('.question');
    var results = {answers: []};
    for (var i = 0; i < this.questions.length; i++) {
      var answer = {
        titleQuestion:  this.questions[i].title,
        answerTrue: false
      }
      var elQuestions = $( "input[name="+this.questions[i].name +"]" );
      for (var j = 0; j < elQuestions.length; j++) {
        if (elQuestions[j].checked && elQuestions[j].value == "true" === elQuestions[j].checked) {
            answer.answerTrue = true;
            break;
        }
      }
      results.answers.push(answer);
    }
  return results},
removeElResults: function(){
  var elP = $('.answer');
  for (var i = 0; i < elP.length; i++) {
    elP[i].remove();
  }
}
}

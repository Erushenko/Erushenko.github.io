'use strict';

let testing = {
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
    let strObj  = JSON.stringify(this.questions);
    localStorage.setItem("testingQuestins", strObj);
  },
  loadQuestions: function(){
    let strObj  = localStorage.testingQuestins;
    this.questions = JSON.parse(strObj);
    console.log(`this.questions ${this.questions}`);
  },
  getResult: function(){
    let elQuestions = $('.question');
    let results = {answers: []};
    for (let value of this.questions) {
      let answer = {
        titleQuestion:  value.title,
        answerTrue: false
      }
      let elQuestions = $( "input[name="+value.name +"]" ).toArray();
      for (let element of elQuestions) {
        if (element.checked && element.value == "true" === element.checked) {
            answer.answerTrue = true;
            break;
        }
      }
      results.answers.push(answer);
    }
  return results},
removeElResults: function(){
  let elP = $('.answer').toArray();
  for (let element of elQuestions) {
    element.remove();
  }
},
test_1: function(a, b){
  return a+b;
},
test_str: function(name){
  return `Your name is ${name}`;
}
}

module.exports = testing
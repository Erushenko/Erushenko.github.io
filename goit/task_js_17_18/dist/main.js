$(document).ready(function(){

  testing.saveQuestions();
  testing.loadQuestions();

  $(function(){
    var html  = $('#test').html();
    //  debugger
    for (var i = 0; i < testing.questions.length; i++) {
      var content = tmpl(html,testing.questions[i]);
      $('.wrapper').append(content);
    }
  });

  // debugger
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("checkResult");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {

    var results = testing.getResult();
    var html  = $('#resultTmpl').html();
    // debugger
    var content = tmpl(html,results);
    $('.modal-body').append(content);

    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    testing.removeElResults();
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      testing.removeElResults();
    }
  }
});
;'use strict';

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
;// Simple JavaScript Templating
// John Resig – http://ejohn.org/ – MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we’re getting a template, or if we need to
    // load the template – and be sure to cache the result.
    var fn = !/\W/.test(str) ?
    cache[str] = cache[str] ||
    tmpl(document.getElementById(str).innerHTML) :

    // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj",
    "var p=[],print=function(){p.push.apply(p,arguments);};" +

    // Introduce the data as local variables using with(){}
    "with(obj){p.push('" +

    // Convert the template into pure JavaScript
    str
    .replace(/[\r\t\n]/g, " ")
    .split("<%").join("\t")
    .replace(/((^|%>)[^\t]*)'/g, "$1\r")
    .replace(/\t=(.*?)%>/g, "',$1,'")
    .split("\t").join("');")
    .split("%>").join("p.push('")
    .split("\r").join("\\'")
    + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

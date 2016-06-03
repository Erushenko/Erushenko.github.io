var testing = require('../js/script.js');

describe("Testing modul testing", function() {
 
  it("Simple", function() {
    expect(testing.test_1(1,2)).toBe(3);
  });

  it("Simple string test", function() {
    expect(testing.test_str('Vasya')).toBe('Your name is Vasya');
  });

  it("Makes array question objects!", function() {
    var questions = [
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
		  ];

    expect(testing.questions).toEqual(questions);
  });
});
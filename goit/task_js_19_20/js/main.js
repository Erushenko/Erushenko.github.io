$(document).ready(function(){
  $('form').on('submit', function(){
    $.ajax({
      url: "https://www.googleapis.com/customsearch/v1?q="+encodeURIComponent(this.elements[0].value)+"&key=AIzaSyDQq5I1_jJG2eKE78NEUM8GCBRwgXRW0F4&cx=000283222127530457480:fcqttmqm5o0&callback=?",
      dataType: "jsonp",
      success: function (data) {
        if (data === null) {
          alert("Ошибка");
        } else {
          // Преобразовать шаблон в HTML и поместить его в DOM
          var ul = document.createElement('ul');
          $.each(data.items, function(i, val) {
            // debugger
            var li = document.createElement('li');
            li.innerHTML = '<a href="'+val.link+'" title="'+val.title+'" target="_blank">'+val.title+"</a> - "+val.snippet;
            ul.appendChild(li);
          });
          $('.wrapper').html(ul);
        }
      }
    });

    event.preventDefault();
  });

  // second part of task
  //creat class Human
  function Human() {
    this.name = 'Vasya';
    this.age = 33;
    this.gender = 'male';
    this.tall = 175;
    this.weight = 80;
  }

  Worker.prototype = new Human();
  Student.prototype = new Human();

  function Worker() {
    this.job = 'treader';
    this.salary = 4000;
    this.work = function() {
      alert('Please, work!');
    };
  }

  function Student() {
    this.university = 'university';
    this.studentship = 500;
    this.watchTV  = function() {
      alert('Whatch TV');
    };
  }

  var worker1 = new Worker();
  var worker2 = new Worker();

  var student1 = new Student();
  var student2 = new Student();

  console.log('worker1: ', worker1);
  console.log('worker2: ', worker2);

  console.log('student1: ', student1);
  console.log('student2: ', student2);

  console.log('student1 name: ', student1.name);
  console.log('worker2 gender: ', worker2.gender);

  worker1.work();
  student2.watchTV();
});

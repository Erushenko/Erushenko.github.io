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

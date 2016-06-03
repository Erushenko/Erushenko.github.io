$(document).ready(function(){

  testing.saveQuestions();
  testing.loadQuestions();

  $(function(){
    let html  = $('#test').html();
    //  debugger
    for (let value of testing.questions) {
      let content = tmpl(html,value);
      $('.wrapper').append(content);
    }
  });

  // debugger
  // Get the modal
  let modal = document.getElementById('myModal');

  // Get the button that opens the modal
  let btn = document.getElementById("checkResult");

  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {

    let results = testing.getResult();
    let html  = $('#resultTmpl').html();
    // debugger
    let content = tmpl(html,results);
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


$(document).ready(function(){
  $(function(){
    $("form.jqtransform").jqTransform();
  });
  $(".checkboxes .niceCheck").each(
    /* при загрузке страницы меняем обычные на стильные checkbox */
    function() {
      changeCheckStart($(this));
    }
  );
  // css checkbox
  (function(){
    startCheck_js();
  })();

  // menu
  $( '.dropdown' ).hover(
      function(){
          $(this).children('.sub-menu')
            .slideDown(200)
            .animate({
                      backgroundColor: "#abcdef"
              }, 50 );
      },
      function(){
          $(this).children('.sub-menu')
          .slideUp(200)
          .animate({
                    backgroundColor: "#c83232"
            }, 50 );
      }
  );


});

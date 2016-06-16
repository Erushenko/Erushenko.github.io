(function ($) {
  'use strict';

  $(function () {
    function refreshGrid (request) {
      var q = request ? '&q='+encodeURIComponent(request) : '';
      $.ajax({
        url: "https://pixabay.com/api/?key=2654122-2e7cfe65e4216a71a55f9c97a&image_type=photo'"+q+"'&callback=?",
        dataType: "jsonp",
        success: function (data) {

          if (data) {

            for (var i = 0; i < 7; i++) {
              var imageUrl = data.hits[i].webformatURL;
              $('.grid-item--'+i)
                .css({
                  'backgroundImage': 'url(' + imageUrl +')',
                  'backgroundSize': 'cover',
                  // 	'backgroundRepeat': 'no-repeat',
                  // 	'backgroundPosition': 'top center'
                })
                .children(".title").text(data.hits[i].tags);

            }


          }
        }
      });

    }



    refreshGrid();

    $('#search__link').on('click', function (e) {
      var r = $('.search__field').val();
      refreshGrid(r);
    });

    $('#search').on('keyup', function(e) {
      if (e.keyCode === 13) {
        // event.preventDefault();
        $('#search__link').click();
        return false;
      }
    });

  });

})(jQuery);

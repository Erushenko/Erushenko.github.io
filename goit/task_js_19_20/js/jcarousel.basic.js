(function($) {
    $(function() {
        $('.jcarousel').jcarousel();
        $('.jcarousel-pagination').jcarouselPagination({
            'item': function(page, carouselItems) {
                return '<a href="#' + page + '"> &nbsp</a>';
            }
        });
        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);

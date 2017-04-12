
$(document).ready(function(){

  $(function() {
    var $window = $(window);
    var $mainNav = $('.main-nav');
    var distance = $mainNav.offset().top;
    
    $window.scroll(function(){
      if ($window.scrollTop() >= distance) {
        $mainNav.addClass('locked');
      } else {
        $mainNav.removeClass('locked');
      }
    });
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

});


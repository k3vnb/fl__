
 var $animation_elements = $('.card');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var scrollTop = $window.scrollTop();

  $('.card').each(function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var elementTopPosition = $element.offset().top;
    var distance = scrollTop - elementTopPosition;
    if (distance > -150 && distance < 15000){
      $element.addClass('in-view') 
    } else {
      $element.removeClass('in-view')
    }

  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
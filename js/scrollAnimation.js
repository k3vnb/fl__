
const $window = $(window);

function check_if_in_view() {
  const scrollTop = $window.scrollTop();

  $('.tile').each(function() {
    const el = $(this);
    // const element_height = el.outerHeight();
    const elTopPosition = el.offset().top;
    const distance = scrollTop - elTopPosition;
    // console.log($element, distance)
    if (distance > -350 && distance < -90){
      el.addClass('in-view') 
    } else {
      el.removeClass('in-view')
    }

  });
}


  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

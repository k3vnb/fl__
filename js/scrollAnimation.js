
//  var $animation_elements = $('.card');
// // var $window = $(window);

// function check_if_in_view() {
//   var windowHeight = $(window).height();
//   var scrollTop = $(window).scrollTop();

//   $('.card').each(function() {
//     var $el = $(this);
//     // var element_height = $el.outerHeight();
//     var elTopPosition = $el.getBoundingClientRect().top();
//     console.log($el, "el top pos: ", elTopPosition, " windowHeight: ", windowHeight)
//     var distance = elTopPosition < windowHeight * 1.5 && elTopPosition > windowHeight * 2;
//     if (distance){
//       $el.addClass('in-view') 
//     } else {
//       $el.removeClass('in-view')
//     }

//   });
// }

// $(window).on('scroll resize', check_if_in_view);
// $(window).trigger('scroll');
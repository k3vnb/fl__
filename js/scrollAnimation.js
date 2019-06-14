
const $window = $(window);


// function check_if_in_view() {
//   const scrollTop = $window.scrollTop();
//   $('.tile').each(function() {
//     const el = $(this);
//     // const element_height = el.outerHeight();
//     const elTopPosition = el.offset().top;
//     const distance = scrollTop - elTopPosition;
//     // console.log($element, distance)
//     if (distance > -350 && distance < -90){
//       el.addClass('in-view') 
//     } else {
//       el.removeClass('in-view')
//     }
//   });
// }

// 289wx265h

// 263wx241h

//at window.height/2 element should be 1.09885 

  $(window).on('scroll resize', animateTileSize);
  $(window).trigger('scroll');

function animateTileSize(){
  const midScreenY = $(window).height()/2;
  const scrollTop = $(window).scrollTop();
  $('.tile').each(function(){
    const tile = $(this);
    const tileTopPosition = tile.offset().top;
    const tileHalfHeight = tile.outerHeight()/2;
    const distance = scrollTop - tileTopPosition - tileHalfHeight;
    // console.log(distance)
    const scaleBy = midScreenY - Math.abs(distance);
    console.log(tile, 1.09885/scaleBy);
    $('.tile').css('transform', `scale(${1.09885 - Math.abs(10.9885/scaleBy) || 1.00001})`)
  })
}
 






function checkTilePosition() {
  const scrollTop = $(window).scrollTop();
  $('.tile').each(function() {
    const tile = $(this);
    const tileTopPosition = tile.offset().top;
    const yPosition = scrollTop - tileTopPosition;

    tile.addClass('scrollY-view')
    // if(tile.attr('id') === '0'){
    //   console.log(el, yPosition)
    // }
    if (yPosition > 202 || yPosition < -400){
      tile.removeClass('y-position-center y-position-2')
      tile.addClass('y-position-default');
    } else if (yPosition < 201 && yPosition > -101 || yPosition < -290 && yPosition > -399){
      tile.removeClass('y-position-center y-position-default')
      tile.addClass('y-position-2')
    } else if (yPosition < -200 && yPosition > -290){
      tile.removeClass('y-position-2 y-position-default')
      tile.addClass('y-position-center')
    }
  });
}


  $(window).on('scroll resize', checkTilePosition);
  $(window).trigger('scroll');


 





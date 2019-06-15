
function checkScreenWidth(){
  // these functions are only necessary for mobile view
  if (window.matchMedia('(max-width: 700px)').matches){
    $(window).trigger('scroll');
    $(window).on('scroll load ', checkTilePosition);
    adjustTileContainerHeight()
  } else {
    $('.tile').each(function() {
      $(this).css('transform', 'scale(1)');
    })
    $('main').css('height', '100vh');
  }
}

function adjustTileContainerHeight(){
  // the tiles will load at the center of the screen's y-axis regardless of window height. This is done by first setting the elements to align properly for approx. 640px screen-height in css, then we are calculating the window height and subtracting the difference
  windowHeight = $(window).height();
  let px;
  if (windowHeight > 640) {
    px = windowHeight % 640;
  } else if (windowHeight > 600) {
    px = 0;
  } else {
    px = windowHeight % 500 * -1
  }
  $('main').css('height', `calc(233.33vh - ${px}px`)
}

function checkTilePosition(){
  // the tiles should get larger as they approach the middle of the screen and smaller as they move away from it. Here we calculate the center of the screen against the middle of the tile and transform scale according to their position.
    const scrollTop = $(window).scrollTop();
    $('.tile').each(function() {
      const tile = $(this);
      const tileHeight = tile.outerHeight();
      const windowHeight = $(window).height(); 
      const tileTopPosition = tile.offset().top; 
      const tileMiddlePosition = tileTopPosition + tileHeight/2;
      const standard = 1.14;
      const middle = tileMiddlePosition - scrollTop - windowHeight/2;
      const distanceFromMiddle = Math.abs(middle);
      tile.css('transform', `scale(${standard - distanceFromMiddle/2400})`)
    });
  }
  
$(window).on('resize', checkScreenWidth)
$(checkScreenWidth);
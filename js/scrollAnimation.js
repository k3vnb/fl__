$(window).trigger('scroll');
$(window).on('scroll resize', whileScrolling);

function whileScrolling() {
  let size = window.scrollY/1000 + 8;
  // $('.tile').css('transform', `scale(${size})`)
  checkTilePosition(size)
}


function checkTilePosition(tileSize){
    const scrollTop = $(window).scrollTop();
    $('.tile').each(function() {
      const tile = $(this);
      const tileHeight = tile.outerHeight(); // 241
      const windowHeight = $(window).height(); //812
      const tileTopPosition = tile.offset().top; //top of tile from top of window at original position;
      const tileMiddlePosition = tileTopPosition + tileHeight/2;
      // console.log('scrolltop ', scrollTop, 'tile-middle ', tileTopPosition)//distance you've scrolled from top position of page, about 1 -1200
      // console.log(tile, tileMiddlePosition);
      const yPosition = scrollTop - tileMiddlePosition;
      const standard = 1.09985;
      const middle = tileMiddlePosition - scrollTop - windowHeight/2;
      const distanceFromMiddle = Math.abs(middle);
      console.log(distanceFromMiddle/1000);
      tile.css('transform', `scale(${standard - distanceFromMiddle/1000})`)
    });
}




// function checkTilePosition(tileSize) {
//   const scrollTop = $(window).scrollTop();
//   $('.tile').each(function() {
//     const tile = $(this);
//     const tileTopPosition = tile.offset().top;
//     const yPosition = scrollTop - tileTopPosition;
//     const standard = 1.09985;
//     console.log(standard, tileSize, standard/tileSize)

//     if (yPosition > 202 || yPosition < -400){
//       tile.css('transform', `scale(${standard - standard/tileSize})`)
//     } else if (yPosition < 201 && yPosition > -101 || yPosition < -290 && yPosition > -399){
//       tile.css('transform', `scale(${standard - standard/tileSize})`)
//     } else if (yPosition < -200 && yPosition > -290){
//         tile.css('transform', `scale(${standard})`)
//     }
//   });
// }



























//   $(window).on('scroll resize', checkTilePosition);
//   $(window).trigger('scroll');


 





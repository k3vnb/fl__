if (window.matchMedia('(max-width: 700px)').matches){
  $(window).trigger('scroll');
  $(window).on('scroll load resize', checkTilePosition);
}



function checkTilePosition(){
    const scrollTop = $(window).scrollTop();
    $('.tile').each(function() {
      const tile = $(this);
      const tileHeight = tile.outerHeight();
      const windowHeight = $(window).height(); 
      const tileTopPosition = tile.offset().top; 
      const tileMiddlePosition = tileTopPosition + tileHeight/2;
      const standard = 1.09985;
      const middle = tileMiddlePosition - scrollTop - windowHeight/2;
      const distanceFromMiddle = Math.abs(middle);
      tile.css('transform', `scale(${standard - distanceFromMiddle/1000})`)
    });
}

$(document).ready(function() {
  
  //set initial values for animations
  //$('.menu-item').css({'opacity':'0'});
  //$('.menu-item').css({'margin-left':'0'});

  //$('.collapse').collapse();

  //$('.menu-item:even').css({'background-color':'#f9f9f9'});
  //$('.menu-item:even').css({'color':'#585959'});

  /* Using jquery to add styling to make it eaiser to interact with items generated from JSON */

  //set top and bottom border on each menu item with an even $index for a hint of item separation
  //$('.menu-item:even').css({'border-top':'1px solid #f9f9f9'});
  //$('.menu-item:even').css({'border-bottom':'1px solid #f9f9f9'});

  //add some padding to each menu item so they don't all run together
  $('.menu-item').css({'padding':'10px 10px 10px 10px'});

});

//wait for window to load to avoid browser hangups --
//not really working all that well but is noticeably better -
//still working on a better implementation
$(window).on('load', function() {

  $('.menu-item').each(function(index) {
    //$(this).delay(400*index).animate({'opacity':'1'}, 800);
    //$(this).animate({'margin-left':'20px'}, 400, 'linear');
  }); 



});
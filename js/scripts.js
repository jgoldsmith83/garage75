
var mapWidth = window.innerWidth;
var mapHeight = window.innerHeight;


$(document).ready(function() {

  /*Make the carousel slide from top into position - NOT WORKING ON FIREFOX */
  //$('#front-page-carousel').animate({'margin-top':'0'}, 2000);

  //Hide the left and right controls on the carousel when the page loads
  $('.carousel-control').hide();

  //Sets automatic sliding at a 5 second interval
  $('.carousel').carousel({
     interval: 5000
  });

  //Show the left and right controls while the mouse is over the carousel
  $('.carousel').hover(function() {
    $('.carousel-control').fadeIn('fast');
  });

  //Hide the left and right controls again after the mouse moves out of the carousel
  $('.carousel').mouseleave(function() {
    $('.carousel-control').fadeOut('fast');
  });

  var buildSalad = $('#salads-3').innerHTML;

});


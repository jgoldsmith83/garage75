var app = angular.module("garage75", []);

app.controller("startersCtrl", function($scope) {
  
  $scope.starters = food_menu[0];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('flatbreadsCtrl', function($scope) {

  $scope.flatbreads = food_menu[1];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('saladsCtrl', function($scope) {

  $scope.salads = food_menu[2];

  $scope.salad_extras = food_extras.salad;

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('wingsCtrl', function($scope) {

  $scope.wings = food_menu[3];

  $scope.wing_extras = food_extras.wings[0];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('sammyCtrl', function($scope) {

  $scope.sammies = food_menu[4];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('burgerCtrl', function($scope) {

  $scope.burgers = food_menu[5];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('seafoodCtrl', function($scope) {

  $scope.seafood = food_menu[6];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('dinnerCtrl', function($scope) {

  $scope.dinner = food_menu[7];

  $scope.sides = food_menu[8];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});

app.controller('drinkCtrl', function($scope) {

  $scope.beer = drink_menu[0];

  $scope.cocktails = drink_menu[1];

  $scope.bottles = drink_menu[2];

  $scope.cans = drink_menu[3];

  $scope.wine = drink_menu[4];

  $scope.rotateIcon = function($event) {

    $(event.currentTarget)
    .children('h2')
    .children('.glyphicon')
    .toggleClass('non-rotated')
    .toggleClass('rotated');
  }

});
var app = angular.module("garage75", []);

app.controller("startersCtrl", function($scope) {
  
  $scope.starters = food_menu[0];

});

app.controller('flatbreadsCtrl', function($scope) {

  $scope.flatbreads = food_menu[1];

});

app.controller('saladsCtrl', function($scope) {

  $scope.salads = food_menu[2];

  $scope.salad_extras = food_extras.salad;

});

app.controller('wingsCtrl', function($scope) {

  $scope.wings = food_menu[3];

  $scope.wing_extras = food_extras.wings[0];

});

app.controller("drinkMenuCtrl", function($scope) {

  

});
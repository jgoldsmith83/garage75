var app = angular.module("garageKitchen", []);

app.controller("foodMenuCtrl", function($scope, $http) {

  $http.get('js/json/food.json').then(function(res) {
    $scope.food = res.data;
  });

  /*
  $http.get('json/food_extras.json').then(function(res) {
    $scope.food_extras = res.data;
  });
  */

});

app.controller("drinkMenuCtrl", function($scope, $http) {

  $http.get('js/json/drinks.json').then(function(res) {
    $scope.drinks = res.data;
  });

});
'use strict'
angular.module('appg.landingCtrl', [])
.controller('LandingController', function($scope){
  $scope.name = "landing";
  console.log("this is scope.name: ",$scope.name);
});
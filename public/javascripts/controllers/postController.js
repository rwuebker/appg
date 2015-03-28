'use strict'
angular.module('appg.postCtrl', [])
.controller('PostController', function($scope, PostsSvc, UserSvc, UserFactory){
  $scope.headline = "";
  $scope.desc = "";
  $scope.data;
  $scope.user = UserFactory.getUser();
  $scope.addPost = function(headline, desc){
    PostsSvc.postPost(headline, desc, function(data){
      $scope.data = data;
    });
  };

  $scope.username = "";
  $scope.password = "";
  $scope.login = function(username, password){
    UserSvc.login(username, password, function(token){
      UserFactory.setUser(token);
      $scope.user = UserFactory.getUser();
    });
  };
});
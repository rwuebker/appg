'use strict'
angular.module('appg.postCtrl', [])
.controller('PostController', function($scope, PostsSvc, UserSvc, UserFactory){
  $scope.headline = "";
  $scope.desc = "";
  $scope.price = "";
  $scope.data;
  $scope.user = UserFactory.getUser();
  $scope.addPost = function(headline, desc, price){
    PostsSvc.postPost(headline, desc, price, function(data){
      $scope.data = data;
      $scope.headline = null;
      $scope.desc = null;
      $scope.price = null;
    });
  };

  $scope.username = "";
  $scope.password = "";
  $scope.usernameS = "";
  $scope.passwordS = "";
  $scope.login = function(username, password){
    UserSvc.login(username, password, function(token){
      UserFactory.setUser(token);
      $scope.user = UserFactory.getUser();
    });
  };

  $scope.signup = function(username, password){
    UserSvc.signup(username, password, function(username, password){
      UserSvc.login(username, password, function(token){
        UserFactory.setUser(token);
        $scope.user = UserFactory.getUser();
      })
    });
  };
});
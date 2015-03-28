'use strict'
angular.module('appg.postsCtrl', [])
.controller('PostsController', function($scope, PostsSvc){
  $scope.searchWord = "";
  $scope.posts;
  $scope.getPosts = function(searchWord){
    PostsSvc.getPosts(searchWord, function(entities){
      $scope.data = entities;
      $scope.entitiesToShow = [];
      for(var i = 0; i < entities.length; i++){
        if(entities[i].headline.indexOf(searchWord) !== -1){
          $scope.entitiesToShow.push(entities[i]);
        }
      }
      console.log("this is entitiesToShow: ", $scope.entitiesToShow);
    });
  };
});
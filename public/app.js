'use strict'
var appg = angular.module('appg', ['ui.router', 'appg.landingCtrl', 'appg.directives', 'appg.services', 'appg.postsCtrl', 'appg.postCtrl', 'appg.factories'])


// console.log("hello");
.config(function($stateProvider, $httpProvider){
  $stateProvider
    .state('landing', {
      template: '<appg-landing></appg-landing>',
      controller: 'LandingController'
    })
    .state('landing.welcome', {
      url: '',
      template: '<appg-welcome></appg-welcome>'
    })
//     // .state('landing.login', {
//     //   url:'/login',
//     //   template: '<appg-login></appg-login>',
//     //   controller: 'LoginController'
//     // })
//     // .state('landing.signup', {
//     //   url:'/signup',
//     //   template: '<appg-signup></appg-signup>',
//     //   controller: 'SignupController'
//     // })
    .state('landing.posts', {
      url:'/posts',
      template: '<appg-posts></appg-posts>',
      controller: 'PostsController'
    })
    .state('landing.post', {
      url:'/post',
      template: '<appg-post></appg-post><appg-login></appg-login>',
      controller: 'PostController'
    })

});
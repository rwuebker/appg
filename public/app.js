'use strict'
var appg = angular.module('appg', ['ui.router', 'appg.landingCtrl'])


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
//     //   url:'/meat',
//     //   template: '<shapp-meat></shapp-meat>',
//     //   controller: 'MeatController'
//     // })
//     // .state('landing.signup', {
//     //   url:'/meat',
//     //   template: '<shapp-meat></shapp-meat>',
//     //   controller: 'MeatController'
//     // })
//     // .state('landing.search', {
//     //   url:'/roulette',
//     //   template: '<shapp-roulette></shapp-roulette>',
//     //   controller: 'RouletteController'
//     // })
//     // .state('landing.post', {
//     //   url:'/roulette',
//     //   template: '<shapp-roulette></shapp-roulette>',
//     //   controller: 'RouletteController'
//     // })



});
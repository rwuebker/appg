angular.module('appg.directives', [])
  .directive('appgLanding', function(){
    return{
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/landing.html'
    }
  })
  .directive('appgWelcome', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/welcome.html'
    }
  }).directive('appgNavbar', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateURL: '/views/navbar.html'
    }
  });
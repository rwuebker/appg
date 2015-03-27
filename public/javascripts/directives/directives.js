angular.module('appg.directives', [])
  .directive('appgLanding', function(){
    return{
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/landing.html'
    }
  })
  .directive('shappWelcome', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/welcome.html'
    }
  });
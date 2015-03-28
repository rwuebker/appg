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
  })
  .directive('appgNavbar', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/navbar.html'
    }
  })
  .directive('appgPosts', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/posts.html'
    }
  })
  .directive('appgPost', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/post.html'
    }
  })
  .directive('appgLogin', function(){
    return {
      restrict: 'EA',
      scope: '=',
      replace: true,
      templateUrl: '/views/login.html'
    }
  });

angular.module('appg.factories', [])
.factory('UserFactory', function(){
  
  var user = null;

  var getUser = function () {
    return user;
  };

  var setUser = function(token){
    user = {};
    user.token = token;
    return user;
  };

  return {
    getUser: getUser,
    setUser: setUser
  };

})
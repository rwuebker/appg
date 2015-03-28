angular.module('appg.services', [])
.service('UserSvc', function($http){
  
  //Service to get all tweets for a search

  var initializeSDK = function(){  
    var APIGEE_ORGNAME = 'rwuebker';
    var APIGEE_APPNAME='sandbox';
    return new Apigee.Client({
      orgName:APIGEE_ORGNAME,
      appName:APIGEE_APPNAME,
      logging: true, //optional - turn on logging, off by default
      buildCurl: true //optional - log network calls in the console, off by default
    
    }); 
  };
  this.login = function(username, password, cb){
    console.log("inside the login function in UserSvc");
    var dataClient = initializeSDK();
    dataClient.login(username, password, function (error, response) {
            if (error) {
              console.log('this is the error: ', error);
            } else {
                cb(response.access_token);
            }
        }
    );
  };
})
.service('PostsSvc', function($http){
          
  //intializes Apigee sandbox connection
  var initializeSDK = function(){  
    var APIGEE_ORGNAME = 'rwuebker';
    var APIGEE_APPNAME='sandbox';
    return new Apigee.Client({
        orgName:APIGEE_ORGNAME,
        appName:APIGEE_APPNAME,
      logging: true, //optional - turn on logging, off by default
      buildCurl: true //optional - log network calls in the console, off by default
    
    }); 
  }

  this.postPost = function(headline, desc){
    var properties = {
      type:'postForSale',
      headline:headline,
      price: 5.50,
      desc: desc
    };
    var dataClient = initializeSDK();
    dataClient.createEntity(properties, function (errorStatus, entity, errorMessage) { 
        if (errorStatus) { 
          console.log("there was an error: ", errorMessage);
        } else { 
          console.log("success, here is entity: ", entity)

           //entityUuid = entity._data.uuid; //saving the UUID so it's available for our other operations in this app
        }
    });
  }
  
  //retrieves data from Apigee
  this.getPosts = function(searchWord, cb){
    console.log("inside PostSvc getPosts function and this is searchWord: ", searchWord);
    var properties = { 
      type:'postForSale',
      qs : "select * where headline contains '" + searchWord + "'"
    };
    var dataClient = initializeSDK();
    dataClient.getEntity(properties, function (errorStatus, entity, errorMessage) { 
      if (errorStatus) { 
        // Error - there was a problem retrieving the entity
        console.log("this is errorStatus: ", errorStatus);
        console.log("this is entity: ", entity);
        console.log("this is errorMessage", errorMessage);   
        return "hello";                  
      } else{
        console.log("success, here is entity: ", entity);
        cb(entity.entities);
      }
    }); 
    //return $http.get('/api/posts', {params: {searchWord: searchWord}});
  };
  
})
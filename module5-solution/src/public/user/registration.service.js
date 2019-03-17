(function () {
    "use strict";
    
    angular.module('public')
    .service('RegistrationService', RegistrationService);
    
    
    RegistrationService.$inject = ['$http', 'ApiPath'];
    function RegistrationService($http, ApiPath) {
      var service = this;
      service.regComplete = false;
      service.reguser = {};
      service.getFavMenu = function () {
        return service.favoritemenu;
      };
      
      service.isFavoriteMenuValid = function(menu) {

        return $http.get(ApiPath + '/menu_items/' + menu + '.json').then(function (response) {
            return response.data;
        });
      };

      service.setRegUser = function(user){
        service.reguser = user;
      }
    
      service.setRegComplete = function(complete){
        service.regComplete = complete;
      };
      service.isRegComplete = function(){
        return service.regComplete;
      }
      service.setFavoriteMenu = function (menu) {

        service.favoritemenu = menu;
      }
      service.getRegUser = function() {
        return service.reguser;
      }
    
    }
    
    
    
    })();
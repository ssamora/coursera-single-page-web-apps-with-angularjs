(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    
    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
      var service = this;

      service.getAllCategories = function() {

        var request = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
          });
  
        return request.then(function(result) {
                  return result.data;
              });
      }  

      service.getItemsForCategory = function(categoryShortName) {

        var request = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
          });
  
          return request.then(function(result) {
                    return result.data;
                  });;

      }
    }



})();
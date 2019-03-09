(function () {
    'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  
    var narrowController = this;
    narrowController.searchTerm = "";

    narrowController.search = function () {
        if(!narrowController.searchTerm) {
            narrowController.found = [];
            return;
        }
        narrowController.promise = MenuSearchService.getMatchedMenuItems(narrowController.searchTerm);
        narrowController.promise.then(function(result) {
            narrowController.found = result;
        });
    }

    narrowController.removeItem = function (itemIndex) {
        narrowController.found.splice(itemIndex, 1);
        if(narrowController.found.length === 0) {
            narrowController.found = undefined;
        }
    }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {

    var menuSearchService = this;

    menuSearchService.getMatchedMenuItems = function (searchTerm) {
        var request = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        });

        return request.then(function(result) {

            var foundItems = [];
            var resItems = result.data.menu_items;

            for(var i = 0; i < resItems.length; i++) {

                if(resItems[i].description.includes(searchTerm)) {
                    foundItems.push(resItems[i]);
                }

            }
            return foundItems;

        });
      };
}
})();
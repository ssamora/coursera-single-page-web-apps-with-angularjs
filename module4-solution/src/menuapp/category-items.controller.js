(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoryItemsController', CategoryItemsController);
    
    // 'categoryId' is injected through state's resolve
    CategoryItemsController.$inject = ['category']
    function CategoryItemsController(category) {
      var catItemController = this;
      catItemController.category = category;
    }
    
})();
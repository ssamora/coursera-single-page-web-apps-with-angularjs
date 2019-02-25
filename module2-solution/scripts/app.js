(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyController = this;
  toBuyController.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyController.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtController = this;
  boughtController.boughtItems = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to buy
  var toBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Coffee",
      quantity: "10"
    }
  ];

  var bought = [];

  service.boughtItem = function (itemIndex) {
    var itemBought = toBuy[itemIndex];
    toBuy.splice(itemIndex, 1);
    bought.push(itemBought);
  };

  service.getItemsToBuy = function () {
    return toBuy;
  };

  service.getItemsBought = function () {
    return bought;
  };
}


})();

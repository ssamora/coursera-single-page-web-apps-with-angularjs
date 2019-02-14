(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkLunch = function () {
    $scope.lunchMessage = "Please enter data first";
    if(!$scope.lunchInput) {
      return;
    }
    var foods = $scope.lunchInput.split(',');
    var count = 0;
    for(var i = 0; i < foods.length; i++){
      if(foods[i].trim() !== ""){
        ++count;
      }
    }
    if(count > 0 && count <= 3){
      $scope.lunchMessage = "Enjoy!";
    }
    else if(count > 3){
      $scope.lunchMessage = "Too much!";
    }

  };
}

})();

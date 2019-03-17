(function () {
    "use strict";
    
    angular.module('public')
    .component('regUserInfo', {
      templateUrl: 'src/public/user/reguserinfo.html',
      bindings: {
        menuItem: '<'
      },
      controller: RegUserInfoController
    });
    
    
    RegUserInfoController.$inject = ['ApiPath', 'RegistrationService'];
    function RegUserInfoController(ApiPath, RegistrationService) {
      var $ctrl = this;
      $ctrl.basePath = ApiPath;
      $ctrl.favmenu = RegistrationService.getFavMenu();
    }
    
    })();
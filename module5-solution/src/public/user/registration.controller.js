(function () {
    
    angular.module('public')
    .controller('RegistrationController', RegistrationController);
    
    RegistrationController.$inject = ['RegistrationService', 'ApiPath'];
    function RegistrationController(RegistrationService, ApiPath) {
      var reg = this;
      reg.apipath = ApiPath;
      reg.invalid = false;
      reg.submit = function () {

        RegistrationService.isFavoriteMenuValid(reg.user.favoritemenu).then(function(response) {
                RegistrationService.setRegComplete(true);
                RegistrationService.setRegUser(reg.user);
                RegistrationService.setFavoriteMenu(response);
                reg.invalid = false;
            }).catch(function(errorResponse) {
                RegistrationService.setRegComplete(false);
                reg.invalid = true;
            });
      }
      reg.isRegComplete = function(){
        return RegistrationService.isRegComplete();
      }

      reg.getFavMenu = function(){
        return RegistrationService.getFavMenu();
      }
      reg.getRegUser = function() {
        return RegistrationService.getRegUser();
      }
    }
    
    })();
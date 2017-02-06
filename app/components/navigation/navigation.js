'use strict';

function NavigationBarCtrl() {

}

angular.module('genestimate').component('genestimateNavigationBar', {
  templateUrl: 'components/navigation/navigation-bar.html',
  controller: ['$scope', '$location', 'AuthService', function($scope, $location, AuthService){

      $scope.isAuthenticated = false;
      $scope.isAdmin = false;
      $scope.username = '';

      $scope.$on('authChanged', function () {
          $scope.isAuthenticated = AuthService.isAuthenticated();
          $scope.isAdmin = AuthService.hasPermission("ADMIN");
          if ($scope.isAuthenticated){
              $scope.username = AuthService.getAuthData().authId;
          }
          else{
              $scope.username = '';
          }
      });

      $scope.logout = function () {

          AuthService.logout().then(function (response) {
              AuthService.setAuthData(undefined);
              $location.path("/login");
          });
      }
    }],
  bindings: {
  	links : '='
  }
});

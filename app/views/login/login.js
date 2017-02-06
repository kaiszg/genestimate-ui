'use strict';

angular.module('genestimate.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$log', '$location', '$scope', 'AuthService', function($log, $location, $scope, AuthService) {

	$scope.user={
		username : '',
		password : ''
	};

	$scope.unvalid = false;

    $scope.login = function () {
        AuthService.login($scope.user).then(function (response) {
            AuthService.setAuthData(response.data);
            if(AuthService.isAuthenticated()){
                $location.path('/order');
			}else{
                $log.error("Login not valid");
                $scope.unvalid = true;
			}
        });
    };
}]);
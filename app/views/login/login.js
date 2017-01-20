'use strict';

angular.module('genestimate.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$location', function($location) {
	var self = this;
	self.email = '';
	self.password = '';
	self.login = function(){
		$location.path('/order');
	}
}]);
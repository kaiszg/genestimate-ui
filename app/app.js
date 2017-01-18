'use strict';

// Declare app level module which depends on views, and components
angular.module('genestimate', [
  'ngRoute',
  'genestimate.login',
  'genestimate.view2',
  'genestimate.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);

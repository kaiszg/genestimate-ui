'use strict';

// Declare app level module which depends on views, and components
angular.module('genestimate', [
    'ngRoute',
    'genestimate.login',
    'genestimate.order',
    'genestimate.contact',
    'genestimate.my-estimate-details',
    'genestimate.estimates-list',
    'genestimate.estimates-details',
    'genestimate.my-estimates',
    'genestimate.loading-directive',
    'genestimate.version'
]).
config(['$locationProvider', '$routeProvider', '$httpProvider', function($locationProvider, $routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('authHttpRequestInterceptor');
    $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});
}]);

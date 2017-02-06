/**
 * Created by Kais on 03.02.2017.
 */
'use strict';

angular.module('genestimate.estimates-details', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/estimate-details/:id', {
            templateUrl: 'views/estimate-details/estimate-details.html',
            controller: 'EstimatesDetailsCtrl'
        });
    }])

    .controller('EstimatesDetailsCtrl', ['$routeParams', 'APIService', 'AuthService', '$log', '$scope', '$location', function ($routeParams, APIService, AuthService, $log, $scope, $location) {

        // check authentification and admin rights
        if(!( AuthService.isAuthenticated() &&  AuthService.hasPermission("ADMIN") )){
            $location.path("/login");
            return;
        }

        $scope.estimate = {};
        APIService.getEstimate($routeParams.id).then(function (response) {
            $scope.estimate = response.data;
        });
    }]);
/**
 * Created by Kais on 02.02.2017.
 */
'use strict';

angular.module('genestimate.my-estimate-details', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/my-estimate-details', {
            templateUrl: 'views/my-estimate-details/my-estimate-details.html',
            controller: 'MyEstimateDetailsCtrl'
        });
    }])

    .controller('MyEstimateDetailsCtrl', ['APIService', 'AuthService', '$location', '$log', '$scope', 'EstimateService', function (APIService, AuthService, $location, $log, $scope, EstimateService) {

        // check authentification
        if(!AuthService.isAuthenticated()){
            $location.path("/login");
            return;
        }

        $scope.estimate = EstimateService.getEstimate();
        $log.log($scope.estimate);
    }]);
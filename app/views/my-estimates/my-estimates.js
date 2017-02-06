/**
 * Created by Kais on 05.02.2017.
 */
'use strict';

angular.module('genestimate.my-estimates', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/my-estimates', {
            templateUrl: 'views/my-estimates/my-estimates.html',
            controller: 'MyEstimatesCtrl'
        });
    }])

    .controller('MyEstimatesCtrl', ['$routeParams', 'APIService', 'AuthService', 'EstimateService','$log', '$scope', '$location', function ($routeParams, APIService, AuthService, EstimateService, $log, $scope, $location) {

        // check authentification
        if(!AuthService.isAuthenticated()){
            $location.path("/login");
            return;
        }

        $scope.estimatesList = [];

        APIService.getMyEstimates().then(function (response) {
            $scope.estimatesList = response.data;
            $log.log($scope.estimatesList);
            $(document).ready(function () {
                $("#estimates-list-table").DataTable();
            });
        });

        $scope.displayEstimateDetails = function(estimate){
            EstimateService.setEstimate(estimate);
            $location.path("/my-estimate-details")
        }
    }]);
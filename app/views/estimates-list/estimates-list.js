/**
 * Created by Kais on 03.02.2017.
 */
'use strict';

angular.module('genestimate.estimates-list', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/estimates-list', {
            templateUrl: 'views/estimates-list/estimates-list.html',
            controller: 'EstimatesListCtrl'
        });
    }])

    .controller('EstimatesListCtrl', ['APIService', '$log', '$scope', 'AuthService', '$location', function (APIService, $log, $scope, AuthService, $location) {

        // check authentification and admin rights
        if(!( AuthService.isAuthenticated() &&  AuthService.hasPermission("ADMIN") )){
            $location.path("/login");
            return;
        }

        $scope.estimatesList = [];
        APIService.getEstimatesList().then(function (response) {
            $scope.estimatesList = response.data;
            $(document).ready(function () {
                $("#estimates-list-table").DataTable();
            });
            $log.info("List of estimates recieved :");
            $log.log($scope.estimatesList);
        });
    }]);
'use strict';

angular.module('genestimate.order', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/order', {
            templateUrl: 'views/order/order.html',
            controller: 'OrderCtrl'
        });
    }])

    .controller('OrderCtrl', ['AuthService', 'APIService', '$log', '$scope', '$location', 'EstimateService', function (AuthService, APIService, $log, $scope, $location, EstimateService) {

        // check authentification
        if(!AuthService.isAuthenticated()){
            $location.path("/login");
            return;
        }

        // Lists for UI selects options
        $scope.finalDimensionsList = [];
        $scope.bindingTypesList =[];
        $scope.rawMaterialsList =[];
        $scope.printingTypesList = [];
        $scope.componentProperties = [];

        // API calls to initialize UI data
        APIService.getFinalDimensionsList().then(function (response) {
            $scope.finalDimensionsList = response.data;
        });

        APIService.getBindingTypes().then(function (response) {
            $scope.bindingTypesList = response.data;
        });

        APIService.getRawMaterials().then(function (response) {
           $scope.rawMaterialsList = response.data;
        });

        APIService.getPrintingTypesList().then(function (response) {
            $scope.printingTypesList = response.data;
        });


        /////////////////////////////////////////////////////////

        // Generated Properties
        $scope.properties = {
            id: null,
            quantity: null,
            nbPages: null,
            client: null,
            product: null,
            //     {
            //     id: null,
            //     name: "Book with one cover and one inner paper type",
            //     components: [
            //         {id: 1, name: "Inner paper", product: null, properties: []}
            //     ],
            //     orders : []
            // },
            assemblyProcess: null,
            componentsProperties: null,
            bindingType: null,
            coverRawMaterial: null,
            coverPrintingType: null,
            finalDimensions: null
        };

        APIService.createProduct().then(function (response) {
            $scope.properties.product = response.data;
        });

        // Function to customize dimensions select label (called from html file)
        $scope.dimensionsLabel = function(length, width){
            return length + " x " + width;
        }

        // Function to submit properties
        $scope.sendProperties = function () {
            var properties = $scope.componentProperties;
            var x = 0;
            $scope.properties.product.components.forEach(function (component) {
                properties[x].component = component;
            });

            $scope.properties.componentsProperties = properties;
            APIService.createEstimate($scope.properties).then(function (response) {
                $log.info("Created Estimate :");
                $log.log(response.data);
                EstimateService.setEstimate(response.data);
                $location.path('/my-estimate-details');
            });
        }
    }]);
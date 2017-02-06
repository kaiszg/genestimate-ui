/**
 * Created by Kais on 30.01.2017.
 */
'use strict';

var app = angular.module('genestimate');
app.factory('APIService', ['$http', '$log',
    function ($http, $log) {
        return {
            getFinalDimensionsList : getFinalDimensionsList,
            getBindingTypes : getBindingTypes,
            getRawMaterials : getRawMaterials,
            getPrintingTypesList : getPrintingTypesList,
            createEstimate : createEstimate,
            createProduct : createProduct,
            getEstimatesList : getEstimatesList,
            getEstimate : getEstimate,
            getMyEstimates : getMyEstimates
        };

        function getFinalDimensionsList(){
            $log.info("Getting final product dimensions from server");
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/dimensions/final");
        }

        function getBindingTypes() {
            $log.info("Getting binding types from server");
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/binding-types");
        }

        function getRawMaterials(){
            $log.info("Getting raw materials from server");
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/raw-materials");
        }

        function getPrintingTypesList() {
            $log.info("Getting printing types from server");
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/printing-types");
        }

        function createEstimate(properties){
            $log.info("Sending properties to server");
            $log.log(properties);
            return $http.post("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/estimates", properties);
        }

        function createProduct(){
            $log.info("Creating product");
            return $http.post("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/products");
        }

        function getEstimatesList(){
            $log.info("Getting estimates list from server");
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/estimates");
        }

        function getMyEstimates(){
            $log.info("Getting estimates of current user");
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/estimates/my-estimates");
        }

        function getEstimate(id) {
            $log.info("Getting estimate details from server");
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/estimates/" + id);
        }
    }]);
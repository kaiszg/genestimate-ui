/**
 * Created by Kais on 02.02.2017.
 */
'use strict';

var app = angular.module('genestimate');
app.factory('EstimateService', [
    function () {
        var storedEstimate = {};

        return {
            getEstimate : getEstimate,
            setEstimate : setEstimate
        }

        function getEstimate() {
            return storedEstimate;
        }

        function setEstimate(estimate){
            storedEstimate = estimate;
        }
    }]);
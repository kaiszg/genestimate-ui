'use strict';

angular.module('genestimate.order', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/order', {
    templateUrl: 'views/order/order.html',
    controller: 'OrderCtrl'
  });
}])

.controller('OrderCtrl', [function() {

}]);
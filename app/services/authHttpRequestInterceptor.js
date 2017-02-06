/**
 * Created by Kais on 04.02.2017.
 */

'use strict';

var app = angular.module('genestimate');
app.factory('authHttpRequestInterceptor', ['$rootScope', '$injector',
    function ($rootScope, $injector) {
    var authHttpRequestInterceptor = {
        request: function ($request) {
            var AuthService = $injector.get('AuthService');
            if (AuthService.isAuthenticated()) {
                $request.headers['auth-id'] = AuthService.getAuthData().authId;
                $request.headers['auth-token'] = AuthService.getAuthData().authToken;
            }
            return $request;
        }
    }

    return authHttpRequestInterceptor;
}]);
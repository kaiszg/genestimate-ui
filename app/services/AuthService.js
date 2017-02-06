/**
 * Created by Kais on 04.02.2017.
 */
'use strict';

var app = angular.module('genestimate');
app.factory('AuthService', ['$http', '$rootScope', '$log',
    function ($http, $rootScope, $log) {

        var authService = {
            authData: undefined
        };

        authService.login = function (user) {
            return $http.post("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/auth/login", user);
        }

        authService.logout = function () {
            return $http.get("http://localhost:8080/Genestimate-1.0-SNAPSHOT/api/auth/logout");
        }

        authService.setAuthData = function (authData) {
            $log.info("AuthData :");
            $log.log(authData);

            this.authData = authData;
            /*{
                authId: authData.authId,
                authToken: authData.authToken,
                authPermission: authData.authPermission
            };*/
            $rootScope.$broadcast('authChanged');
        };

        authService.getAuthData = function () {
            return this.authData;
        };

        authService.isAuthenticated = function () {
            return angular.isObject(this.getAuthData());
            //return !angular.isUndefined(this.getAuthData());
        };

        authService.hasPermission = function (permission) {
            if(!this.isAuthenticated()){
                return false;
            }
            return this.authData.authPermission == permission;
        }

        return authService;
    }]);
'use strict';

angular.module('bidApp', ['dangle','ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
          .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
          .otherwise({
        redirectTo: '/'
      });
    }]);

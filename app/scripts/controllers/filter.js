'use strict';

angular.module('bidApp')
    .controller('FilterCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      $scope.clicked = function (option) {
        $rootScope.$broadcast('bidFilterStarted', option);
      };
    }]);

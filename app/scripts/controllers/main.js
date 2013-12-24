'use strict';

angular.module('bidApp')
    .controller('MainCtrl', ['$scope', 'Data', function ($scope, Data) {
      $scope.messages = Data.filterData('2012');
      $scope.period = Data.periodData();
      $scope.type = Data.typeData();

      $scope.$on('bidFilterStarted', function(e, option) {
        $scope.messages = Data.filterData(option);
      });
    }]);

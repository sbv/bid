'use strict';

angular.module('bidApp')
    .controller('MainCtrl', ['$scope', 'Data', function ($scope, Data) {

      $scope.data1 = Data.filteredData();

      $scope.year2012Clicked = function () {
        Data.query2();
        $scope.data1 = Data.filteredData();
      };

      $scope.year2013Clicked = function () {
        Data.query3();
        $scope.data1 = Data.filteredData();
      };
    }]);

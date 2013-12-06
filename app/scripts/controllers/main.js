'use strict';

angular.module('bidApp')
  .controller('MainCtrl', ['$scope', 'Data', function ($scope, Data) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

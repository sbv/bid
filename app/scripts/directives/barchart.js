'use strict';

angular.module('bidApp')
  .directive('barchart', ['Data', function (Data) {
    return {
      template: '<div><canvas id="myChart" width="600" height="300"></canvas></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var ctx = element.find('canvas')[0].getContext('2d');
        new Chart(ctx).Bar(Data);
      }
    };
  }]);

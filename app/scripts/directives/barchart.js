'use strict';

angular.module('bidApp')
  .directive('bidBarchart', [function () {
    return {
      template: '<div><canvas id="myChart" width="600" height="300"></canvas></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var chartData;
        var ctx = element.find('canvas')[0].getContext('2d');
        /*global Chart */
        var chart = new Chart(ctx);
        scope.$watch(attrs.data, function(value) {
          chartData = value;
          chart.Bar(chartData);
        });
      }
    };
  }]);

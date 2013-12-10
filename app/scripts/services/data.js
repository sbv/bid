'use strict';

angular.module('bidApp')
    .service('Data', function Data() {
      var self = this;

      self.filteredData = function () {
        return self.data;
      };

      self.query2 = function () {
        self.data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              fillColor: 'rgba(220,220,220,0.5)',
              strokeColor: 'rgba(220,220,220,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
              fillColor: 'rgba(151,187,205,0.5)',
              strokeColor: 'rgba(151,187,205,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
            }
          ]
        };
      };

      self.query2();

      self.query3 = function () {
        self.data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              fillColor: 'rgba(220,220,220,0.5)',
              strokeColor: 'rgba(220,220,220,1)',
              data: [65, 59, 190, 81, 56, 55, 40]
            },
            {
              fillColor: 'rgba(151,187,205,0.5)',
              strokeColor: 'rgba(151,187,205,1)',
              data: [28, 48, 20, 19, 96, 27, 10]
            }
          ]
        };
      };
    }
);

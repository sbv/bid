'use strict';

angular.module('bidApp')
    .service('Data', function Data() {
      var self = this;

      self.filterData = function (option) {
        if(option === '2010') {
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
        }
        if(option === '2011') {
          self.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                fillColor: 'rgba(220,220,220,0.5)',
                strokeColor: 'rgba(220,220,220,1)',
                data: [85, 59, 90, 81, 56, 55, 40]
              },
              {
                fillColor: 'rgba(151,187,205,0.5)',
                strokeColor: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          };
        }
        if(option === '2012') {
          self.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                fillColor: 'rgba(220,220,220,0.5)',
                strokeColor: 'rgba(220,220,220,1)',
                data: [125, 59, 90, 81, 56, 55, 40]
              },
              {
                fillColor: 'rgba(151,187,205,0.5)',
                strokeColor: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          };
        }
        if(option === '2013') {
          self.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                fillColor: 'rgba(220,220,220,0.5)',
                strokeColor: 'rgba(220,220,220,1)',
                data: [165, 59, 90, 81, 56, 55, 40]
              },
              {
                fillColor: 'rgba(151,187,205,0.5)',
                strokeColor: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          };
        }
        if(option === 'inbound') {
          self.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                fillColor: 'rgba(220,220,220,0.5)',
                strokeColor: 'rgba(220,220,220,1)',
                data: [185, 59, 90, 81, 56, 55, 40]
              },
              {
                fillColor: 'rgba(151,187,205,0.5)',
                strokeColor: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          };
        }
        if(option === 'outbound') {
          self.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
              {
                fillColor: 'rgba(220,220,220,0.5)',
                strokeColor: 'rgba(220,220,220,1)',
                data: [205, 59, 90, 81, 56, 55, 40]
              },
              {
                fillColor: 'rgba(151,187,205,0.5)',
                strokeColor: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]
          };
        }
        return self.data;
      };

      self.periodData = function () {
        return ['2010', '2011', '2012', '2013'];
      };

      self.typeData = function () {
        return ['inbound', 'outbound'];
      };
    }
);

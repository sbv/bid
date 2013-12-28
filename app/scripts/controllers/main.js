'use strict';

angular.module('bidApp')
    .controller('MainCtrl', ['$scope', 'Data', '$log', function ($scope, Data, $log) {
      $scope.messages = Data.filterData('2012');
      $scope.period = Data.periodData();
      $scope.type = Data.typeData();

      $scope.$on('bidFilterStarted', function(e, option) {
        $scope.messages = Data.filterData(option);
      });

      var resultsA = {
        facets: {
          Product : {
            _type : 'terms',
            missing : 0,
            total : 454,
            other : 0,
            terms : [{
              term : 'Prod-A',
              count : 306
            },{
              term : 'Prod-B',
              count : 148
            },{
              term : 'Prod-C',
              count : 62
            }]
          },
          Sex : {
            _type : 'terms',
            missing : 0,
            total : 454,
            other : 0,
            terms : [{
              term : 'Male',
              count : 36
            },{
              term : 'Female',
              count : 148
            }]
          },
          Times : {
            _type: 'date_histogram',
            entries : [{
              time : 1341100800000,
              count : 9
            }, {
              time : 1343779200000,
              count : 32
            }, {
              time : 1346457600000,
              count : 78
            }, {
              time : 1349049600000,
              count : 45
            }, {
              time : 1351728000000,
              count : 134
            }]
          }
        }
      };

      var resultsB = {
        facets: {
          Product : {
            _type : 'terms',
            missing : 0,
            total : 454,
            other : 0,
            terms : [{
              term : 'Prod-A',
              count : 306
            },{
              term : 'Prod-B',
              count : 148
            },{
              term : 'Prod-C',
              count : 0
            }]
          },
          Sex : {
            _type : 'terms',
            missing : 0,
            total : 454,
            other : 0,
            terms : [{
              term : 'Male',
              count : 36
            }]
          },
          Times : {
            _type: 'date_histogram',
            entries : [{
              time : 1341100800000,
              count : 9
            }, {
              time : 1343779200000,
              count : 32
            }, {
              time : 1346457600000,
              count : 78
            }]
          }
        }
      };

      $scope.filterSearchA = function(type, term) {
        $log.log('type: '+type+', term: '+term);
        switch(currentResults) {
          case 'A':
            $scope.results = resultsB;
            currentResults = 'B';
            break;
          case 'B':
            $scope.results = resultsA;
            currentResults = 'A';
            break;
        }
      };

      $scope.results = resultsA;
      var currentResults = 'A';

    }]);

'use strict';

angular.module('bidApp')
    .controller('MainCtrl', ['$scope', 'Data', '$log', 'ejsResource', function ($scope, Data, $log, ejsResource) {

      $scope.messages = Data.filterData('2012');
      $scope.period = Data.periodData();
      $scope.type = Data.typeData();

      $scope.$on('bidFilterStarted', function(e, option) {
        $scope.messages = Data.filterData(option);
      });


      // point to your ElasticSearch server
      var ejs = ejsResource('http://localhost:9200');
      var index = 'system1';
      var type = 'book';

      var interval = 'year';
      var rangeFacetFilter;
      var termsFacetFilter;

      // setup the indices and types to search across
      // define our search function that will be called when a user
      // submits a search
      function doSearch() {
        var termsFacet = ejs.TermsFacet('types').field('type');
        var dataHistogramFacet = ejs.DateHistogramFacet('period').field('created').interval(interval);

        if (termsFacetFilter && rangeFacetFilter) {
          var andFacet = ejs.AndFilter([termsFacetFilter, rangeFacetFilter]);
          termsFacet.facetFilter(andFacet);
          dataHistogramFacet.facetFilter(andFacet);
        }
        else if (termsFacetFilter) {
          termsFacet.facetFilter(termsFacetFilter);
          dataHistogramFacet.facetFilter(termsFacetFilter);
        }
        else if (rangeFacetFilter) {
          termsFacet.facetFilter(rangeFacetFilter);
          dataHistogramFacet.facetFilter(rangeFacetFilter);
        }

        ejs.Request().indices(index).types(type)
            .facet(termsFacet)
            .facet(dataHistogramFacet).doSearch(function (results) {
              $scope.results = results;
              $log.log(results);
            });
      }

      doSearch();

      $scope.removeSelectedYear = function () {
        $scope.yearSelected = null;
        rangeFacetFilter = null;
        interval = 'year';
        doSearch();
      };

      $scope.removeSelectedType = function () {
        $scope.typeSelected = null;
        termsFacetFilter = null;
        doSearch();
      };

      $scope.filterPeriod = function (name, intervalBucket) {
        if(!$scope.yearSelected) {
          $log.log(name+' '+intervalBucket);
          var fromTS = new Date(intervalBucket);
          var toTS = new Date(fromTS.getFullYear() + 1, fromTS.getMonth(), fromTS.getDate()).getTime();
          rangeFacetFilter = ejs.RangeFilter('created').gte(intervalBucket).lt(toTS);
          interval = 'month';
          $scope.yearSelected = fromTS.getFullYear();
          doSearch();
        }
      };

      $scope.filterType = function (name, term) {
        if(!$scope.typeSelected) {
          $log.log(name+' '+term);
          termsFacetFilter = ejs.TermsFilter('type', term);
          $scope.typeSelected = term;
          doSearch();
        }
      };

      function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function getRandomType () {
        return Math.random()<0.6?'softback':'hardback';
      }

      function getCreatedTS () {
        var fromDate = new Date(2006, 0, 1);
        var toDate = new Date(2013, 11, 24);
        var date = new Date(getRandomInt(fromDate.getTime(), toDate.getTime()));
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
      }

      // index the sample documents
      $scope.indexSampleDocs = function () {
        for (var i = 0; i < 100; i++) {
          ejs.Document(index, type).source({
            type: getRandomType(),
            created: getCreatedTS()
          }).refresh(true).doIndex();
        }
      };

    }]);

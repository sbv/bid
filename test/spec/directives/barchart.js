'use strict';

describe('Directive: bidBarchart', function () {

  // load the directive's module
  beforeEach(module('bidApp'));

  var //element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function () { //($compile) {
//    element = angular.element('<bid-barchart></bid-barchart>');
//    element = $compile(element)(scope);
//    expect(element.text()).toBe('this is the barchart directive');
  }));
});

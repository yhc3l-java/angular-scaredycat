'use strict';

describe('Directive: scarecrowHand', function () {

  // load the directive's module
  beforeEach(module('scaredycatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scarecrow-hand></scarecrow-hand>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scarecrowHand directive');
  }));
});

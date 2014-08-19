'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scarecrowHand
 * @description
 * # scarecrowHand
 */
angular.module('scaredycatApp')
  .directive('scarecrowHand', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the scarecrowHand directive');
      }
    };
  });

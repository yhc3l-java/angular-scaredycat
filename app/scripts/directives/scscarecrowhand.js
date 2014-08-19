'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scarecrowHand
 * @description
 * # scarecrowHand
 */
angular.module('scaredycatApp')
	.directive('scScarecrowHand', function () {
		return {
			scope: {
				cards: '='
			},
			template: '<div class="scarecrow-hand">' +
				'<div class="scarecrow-card">' +
				'<sc-card card-type="\'scarecrow1\'" ng-show="showScarecrow(\'scarecrow1\')"></sc-card>' +
				'</div>' +
				'<div class="scarecrow-card">' +
				'<sc-card card-type="\'scarecrow2\'" ng-show="showScarecrow(\'scarecrow2\')"></sc-card>' +
				'</div>' +
				'<div class="scarecrow-card">' +
				'<sc-card card-type="\'scarecrow3\'" ng-show="showScarecrow(\'scarecrow3\')"></sc-card>' +
				'</div>' +
				'<div class="scarecrow-card">' +
				'<sc-card card-type="\'scarecrow4\'" ng-show="showScarecrow(\'scarecrow4\')"></sc-card>' +
				'</div>' +
				'<div class="scarecrow-card">' +
				'<sc-card card-type="\'scarecrow5\'" ng-show="showScarecrow(\'scarecrow5\')"></sc-card>' +
				'</div>' +
				'<div class="scarecrow-card">' +
				'<sc-card card-type="\'scarecrow6\'" ng-show="showScarecrow(\'scarecrow6\')"></sc-card>' +
				'</div>' +
				'</div>',
			restrict: 'E',
			controller: function ($scope) {
				$scope.showScarecrow = function (scarecrow) {
					return $scope.cards.indexOf(scarecrow) > -1;
				};

			}
		};
	});
'use strict';

/**
 * @ngdoc directive
 * @name scaredycatApp.directive:scHand
 * @description
 * # scHand
 */
angular.module('scaredycatApp')
	.directive('scHand', function () {
		return {
			scope: {
				cards: '=',
				playerName: '='
			},
			template: '<div>' +
				'<h2>{{ playerName }}</h2>' +
				'<div ng-repeat="card in cards">' +
				'<sc-card card-type="card"></sc-card>' +
				'</div>' +
				'<div class="clearfix"></div>' +
				'</div>',
			restrict: 'E'

		};
	});
'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
	.controller('MainCtrl', function ($scope) {
		$scope.user = '';
		$scope.$watch('user', function (newValue, oldValue) {
			if (newValue !== '') {
				console.log('user');
				console.log('redirect to /game');
			}
		});
	});
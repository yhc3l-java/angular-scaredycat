'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
	.controller('GameCtrl', function ($scope, userInfo) {
		$scope.username = userInfo.getUsername();
		$scope.card = 'bird2';
	});
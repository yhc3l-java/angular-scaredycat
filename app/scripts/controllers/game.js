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
		/*console.log(userInfo.getUsername());
		$scope.username1 = 'Tom';
		$scope.username2 = 'Computer';
		$scope.player1Cards = ['bird1', 'bird3', 'bird6'];
		$scope.player2Cards = ['bird2', 'bird5', 'bird3'];*/
		$scope.scarecrowCards = ['scarecrow1', 'scarecrow4', 'scarecrow5', 'scarecrow6', 'scarecrow2'];

	});
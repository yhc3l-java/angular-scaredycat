'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
	.controller('GameCtrl', function ($scope, $timeout, userInfo, deck) {
		var turn = 0;
		$scope.scarecrowCards = [];
		$scope.players = [{
			name: 'Tom',
			hand: []
		}, {
			name: 'Computer',
			hand: []
		}];
		$scope.selectedCard = 'back';
		$scope.getNextCard = function () {
			if ($scope.selectedCard === 'back' && $scope.scarecrowCards.length < 6) {
				$scope.selectedCard = deck.getNextCard();
				$timeout(function () {
					if ($scope.selectedCard.indexOf('scarecrow') > -1) {
						$scope.scarecrowCards.push($scope.selectedCard);
					} else if ($scope.selectedCard.indexOf('cat') > -1) {
						deck.addCards([$scope.selectedCard]);
						deck.addCards($scope.players[turn].hand);
						$scope.players[turn].hand = [];
					} else {
						$scope.players[turn].hand.push($scope.selectedCard);
					}
					$scope.selectedCard = 'back';
					turn = (turn + 1 < $scope.players.length) ? turn + 1 : 0;
				}, 700);
			}
		};
	});
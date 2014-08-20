'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
	.controller('GameCtrl', function ($scope, $timeout, $location, userInfo, deck) {
		var turn = 0;

		function calculateScore(hand) {
			var score = 0;
			for (var i = 0; i < hand.length; i = i + 1) {
				score = score + parseInt(hand[i].replace('bird', ''));
			}
			return score;
		}



		if (userInfo.getUsername() === '') {
			$location.path('/');
		} else {
			$scope.scarecrowCards = [];
			$scope.players = [{
				name: userInfo.getUsername(),
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
					}, 300);
				}
			};
			$scope.isGameFinished = function () {
				return $scope.scarecrowCards.length === 6;
			};
			$scope.saveScore = function () {
				userInfo.setScore(calculateScore($scope.players[0].hand))
					.then(function () {
						$location.path('/results');
					});

			};
		}
	});
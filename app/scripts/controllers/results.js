'use strict';

/**
 * @ngdoc function
 * @name scaredycatApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the scaredycatApp
 */
angular.module('scaredycatApp')
	.controller('ResultsCtrl', function ($scope, $http, userInfo, highscores) {
		$scope.score = userInfo.getScore();
		// highscores are resolved in our route in app.js
		$scope.highscores = highscores;
		/*
		$http.get('http://scaredycat.beta2.se/highscores')
			.success(function (data) {
				$scope.highscores = data;
			});*/
	});
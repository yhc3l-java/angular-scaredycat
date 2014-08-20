'use strict';

/**
 * @ngdoc overview
 * @name scaredycatApp
 * @description
 * # scaredycatApp
 *
 * Main module of the application.
 */
angular
  .module('scaredycatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        resolve: {
          highscores: function ($http) {
            return $http.get('http://scaredycat.beta2.se/highscores')
              .then(function (data) {
                return data.data;
              });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
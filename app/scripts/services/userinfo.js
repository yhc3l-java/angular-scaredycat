'use strict';

/**
 * @ngdoc service
 * @name scaredycatApp.userInfo
 * @description
 * # userInfo
 * Factory in the scaredycatApp.
 */
angular.module('scaredycatApp')
  .factory('userInfo', function ($http) {
    // Service logic
    // ...

    var username = '',
      lastScore = 0;

    // Public API here
    return {
      setUsername: function (name) {
        username = name;
      },
      getUsername: function () {
        return username;
      },
      setScore: function (score) {
        lastScore = score;
        $http.put('http://scaredycat.beta2.se/highscores/' + username, {
          score: score
        });
      },
      getScore: function () {
        return lastScore;
      }
    };
  });
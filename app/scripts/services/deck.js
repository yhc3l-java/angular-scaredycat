'use strict';

/**
 * @ngdoc service
 * @name scaredycatApp.deck
 * @description
 * # deck
 * Factory in the scaredycatApp.
 */
angular.module('scaredycatApp')
  .factory('deck', function () {
    // Service logic
    // ...
    var cards = [],
      bird1Count = 1,
      bird2Count = 0,
      bird3Count = 0,
      bird4Count = 1,
      bird5Count = 0,
      bird6Count = 3;

    window.cards = cards;

    function addBirds(birdname, count) {
      for (var i = 0; i < count; i = i + 1) {
        cards.push(birdname);
      }
    }

    cards.push('scarecrow1', 'scarecrow2', 'scarecrow3', 'scarecrow4', 'scarecrow5', 'scarecrow6');
    cards.push('cat1' /*, 'cat2', 'cat3', 'cat4'*/ );
    addBirds('bird1', bird1Count);
    addBirds('bird2', bird2Count);
    addBirds('bird3', bird3Count);
    addBirds('bird4', bird4Count);
    addBirds('bird5', bird5Count);
    addBirds('bird6', bird6Count);

    cards = _.shuffle(cards);

    // Public API here
    return {
      getNextCard: function () {
        return cards.shift();
      },
      addCards: function (usersCards) {
        for (var i = 0; i < usersCards.length; i = i + 1) {
          cards.push(usersCards[i]);
        }
        cards = _.shuffle(cards);
      }
    };
  });
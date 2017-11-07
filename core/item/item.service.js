'use strict';

angular.
  module('core.item').
  factory('Item', [
    '$resource',
    function($resource) {
      return $resource('json/:itemId.json', {}, {
        query: {
          method: 'GET',
          // params: {itemId: 'lotto'},
          params: {itemId: 'lottoCopy'},
          isArray: false
        }
      });
    }
  ]);
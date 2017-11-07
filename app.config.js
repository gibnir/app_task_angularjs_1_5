'use strict';

angular.
  module('lottoWidget').
  config([
    '$locationProvider',
    '$routeProvider',
    function config($locationProvider, $routeProvider) {
      
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/items', {
          template: '<item-list></item-list>'
        }).
        otherwise('/items');
    }
  ]);

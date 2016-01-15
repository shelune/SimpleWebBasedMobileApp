'use strict';

/**
 * @ngdoc overview
 * @name experimentalApp
 * @description
 * # experimentalApp
 *
 * Main module of the application.
 */
angular
  .module('myTodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pokemon', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonCtrl',
        controllerAs: 'pokemon'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  
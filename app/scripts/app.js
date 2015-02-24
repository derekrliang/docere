'use strict';

/**
 * @ngdoc overview
 * @name docereApp
 * @description
 * # docereApp
 *
 * Main module of the application.
 */

var app = angular.module('docereApp', [
  'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/main', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/subject', {
        templateUrl: '/views/subject.html',
        controller: 'MainCtrl'
      })
      /*.when('/subject/:title', {

      })*/
      .otherwise({
        redirectTo: '/main'
      });
  }
]);

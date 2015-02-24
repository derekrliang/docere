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
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html'
      })
      .when('/subject', {
        templateUrl: '/views/subject.html',
        controller: 'SubjectCtrl'
      })
      /*.when('/subject/:title', {

       })*/
      .otherwise({
        redirectTo: '/main'
      });
  }
);

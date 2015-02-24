'use strict';

/**
 * @ngdoc function
 * @name docereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the docereApp
 */

var app = angular.module('docereApp');

app.controller('MainCtrl', function ($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

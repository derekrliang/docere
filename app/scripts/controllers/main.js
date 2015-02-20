'use strict';

/**
 * @ngdoc function
 * @name docereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the docereApp
 */
angular.module('docereApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

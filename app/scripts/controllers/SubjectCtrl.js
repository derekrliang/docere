'use strict';

var app = angular.module('docereApp');

app.controller('SubjectCtrl', function ($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.welcome = 'hello';
  }
);

'use strict';

angular.module('angulabApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'LabController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

angular.module('angulabApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
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

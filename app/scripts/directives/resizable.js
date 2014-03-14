'use strict';

angular.module('angulabApp')
  .directive('resizable', ['manipulatorService', function(manipulatorService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        manipulatorService.resizable(element);
      }
    };
  }]);

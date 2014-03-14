'use strict';

angular.module('angulabApp')
  .directive('rotatable', ['manipulatorService', function(manipulatorService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        manipulatorService.rotatable(element);
      }
    };
  }]);

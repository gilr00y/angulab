'use strict';

angular.module('angulabApp')
  .directive('draggable', ['manipulatorService', function(manipulatorService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        manipulatorService.draggable(element);
      }
    };
  }]);

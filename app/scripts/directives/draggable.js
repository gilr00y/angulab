'use strict';

angular.module('angulabApp')
  .directive('draggable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        svgService.draggable(element);
      }
    };
  }]);

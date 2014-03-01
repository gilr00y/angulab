'use strict';

angular.module('angulabApp')
  .directive('rotatable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        svgService.rotatable(element);
      }
    };
  }]);

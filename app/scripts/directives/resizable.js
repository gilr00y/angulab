'use strict';

angular.module('angulabApp')
  .directive('resizable', ['svgService', function(svgService) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        svgService.resizable(element);
      }
    };
  }]);
